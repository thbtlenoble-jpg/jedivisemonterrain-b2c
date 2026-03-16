<template>
  <!-- <div class="container">
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-2">
        <autocomplete :is-async="true" @addressChosen="tmp($event)" />
      </div>
      <template v-show="isReady">
        <div class="col-span-9"> -->
  <div id="mapid" ref="mapid" class="cursor-pointer absolute">
    <div
      class="flex absolute z-10 bottom-0 left-0 mb-4 ml-4 cursor-pointer"
      @click="changeMapStyle"
    >
      <img
        v-if="mapStyle == 'vector'"
        class="w-12 h-12 cursor-pointer"
        src="/img/preview-ortho.png"
        alt="Fond orthophoto"
      />
      <img
        v-if="mapStyle == 'ortho'"
        class="w-12 h-12 cursor-pointer"
        src="/img/preview-vector.png"
        alt="Fond vectoriel"
      />
    </div>
  </div>
  <!-- </div> -->
  <!-- </template>
    </div>
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'

const mapboxgl = require('mapbox-gl')
const axios = require('axios')
// const turf = require('turf')

// some styles
const filledColor = '#FFE920'
const borderColorParcelles = '#FFE920'
const borderColor = '#FFE920'
const contoursPaint = {
  'line-width': [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    3,
    ['boolean', ['feature-state', 'selected'], false],
    3,
    1,
  ],
  'line-color': [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    'rgba(255, 233, 32, 1)',
    ['boolean', ['feature-state', 'selected'], false],
    'rgba(255, 233, 32, 1)',
    'rgba(255, 233, 32, 0.3)',
  ],
  'line-dasharray': [3, 2],
}

const parcellesLayer = {
  id: 'parcelles-layer',
  source: 'parcelles',
  type: 'fill',
  'source-layer': 'default',
  paint: {
    'fill-color': filledColor,
    'fill-outline-color': [
      'case',
      ['boolean', ['feature-state', 'selected'], false],
      borderColor,
      borderColorParcelles,
    ],
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      0.1,
      ['boolean', ['feature-state', 'selected'], false],
      0.4,
      0.0,
    ],
  },
}

const parcellesContoursLayer = {
  id: 'parcelles-contour-layer',
  source: 'parcelles',
  'source-layer': 'default',
  type: 'line',
  paint: contoursPaint,
}

const styles = {
  ortho: {
    version: 8,
    glyphs:
      'https://openmaptiles.geo.data.gouv.fr/fonts/{fontstack}/{range}.pbf',
    sources: {
      'raster-tiles': {
        type: 'raster',
        tiles: [
          'https://tiles.geo.api.gouv.fr/photographies-aeriennes/tiles/{z}/{x}/{y}',
        ],
        tileSize: 256,
        attribution: 'Images aériennes © IGN',
      },
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
      },
    ],
  },
  vector: 'mapbox://styles/mapbox/light-v10',
}

export default Vue.extend({
  props: {
    coord: {
      type: Array,
      required: true,
    },
    parcelleSelectedInfos: {
      type: Array,
      required: true,
    },
    parcelleSelectAddress: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      // var
      map: null as any,
      hoveredStateId: null,
      selectedStateId: null,
      isReady: false,
      hoverableSources: ['parcelles'],
      parcellesLayer,
      parcellesContoursLayer,
      styles: styles as any,
      mapStyleChanged: null as any,
      mapLoaded: false,
      mapStyle: 'vector',
      parcelleSelected: [] as any,
      parcelleCliked: false,
    }
  },
  watch: {
    coord() {
      // console.log('change coord')
      if (this.map !== null && this.coord[0] !== 0 && this.coord[1] !== 0) {
        this.map.flyTo({
          center: [this.coord[0], this.coord[1]],
          essential: true,
          zoom: 17,
        })
        axios
          .post(`${process.env.TILE_SERVER}/tiles/parcelle_id`, {
            lon: this.coord[0],
            lat: this.coord[1],
          })
          .then((resp: any) => {
            const dataParcelle = resp.data
            // console.log(data_parcelle)
            const parcelleId = dataParcelle.parcelle_id
            if (this.parcelleSelectAddress) {
              if (parcelleId === '') {
                this.$toast.info(
                  'Votre addresse ne correspond à aucune parcelle, veuillez en sélectionner une',
                  {
                    duration: 50000,
                  }
                )
              } else {
                this.selectedStateId = parcelleId
                this.parcelleSelected.push(this.selectedStateId)
                const listParcelleId: any = []
                this.parcelleSelectedInfos.forEach((item: any) => {
                  listParcelleId.push(item.parcelleId)
                })
                if (!listParcelleId.includes(parcelleId)) {
                  this.parcelleSelectedInfos.push({
                    parcelleId: dataParcelle.parcelle_id,
                    arpente: dataParcelle.arpente,
                    commune: dataParcelle.commune,
                    contenance: dataParcelle.contenance,
                    created: dataParcelle.created_date,
                    numero: dataParcelle.numero,
                    prefixe: dataParcelle.prefixe,
                    section: dataParcelle.section,
                    updated: dataParcelle.updated_date,
                  })
                }
                this.map.setFeatureState(
                  {
                    source: 'parcelles',
                    sourceLayer: 'default',
                    id: this.selectedStateId,
                  },
                  { selected: true }
                )
              }
            } else {
              this.parcelleSelectedInfos.forEach((item: any) => {
                this.parcelleSelected.push(item.parcelleId)
              })
            }
          })
      }
    },
    parcelleSelectedInfos() {
      this.map.on('styledata', () => {
        this.selectParcelle()
      })
    },
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.initializeMap()
    }
  },
  methods: {
    loadCustomLayers() {
      const TILE_SERVER = process.env.TILE_SERVER || 'https://jdmt-data-api-production.herokuapp.com'
      if (!this.mapLoaded) {
        this.map.addSource('parcelles', {
          type: 'vector',
          tiles: [`${TILE_SERVER}/tiles/parcelle/{z}/{x}/{y}.pbf`],
          maxzoom: 16,
          minzoom: 12,
          promoteId: 'parcelle_id',
        })
        this.map.addLayer(this.parcellesLayer)
        this.map.addLayer(this.parcellesContoursLayer)
      }

      if (this.mapStyleChanged) {
        this.mapStyleChanged = false
      }

      this.mapLoaded = true
    },

    initializeMap() {
      mapboxgl.accessToken = process.env.MAPBOX_ACCESTOKEN
      this.map = new mapboxgl.Map({
        container: 'mapid',
        center: [3, 47],
        zoom: 5,
        minZoom: 1,
        maxZoom: 19,
        style: this.styles[this.mapStyle],
      })

      this.map.on('styledata', () => {
        this.loadCustomLayers()
        if (this.isReady) {
          this.isReady = true
          this.$emit('update:isReady', true)
        }
      })

      this.hoverableSources.map((source) => {
        const layer = `${source}-layer`
        this.map.on('mousemove', layer, (e: any) => {
          this.onMouseMove(e, source)
        })
        this.map.on('mouseleave', layer, () => {
          this.onMouseLeave(source)
        })
      })

      this.map.on('click', 'parcelles-layer', (event: any) => {
        this.selectedStateId = event.features[0].properties.parcelle_id
        const idx = this.parcelleSelected.indexOf(this.selectedStateId)
        /* let idx = -1
        this.parcelleSelected.forEach((parcelle: any, index: any) => {
          if (parcelle === this.selectedStateId) {
            idx = index
          }
          console.log(parcelle)
        }) */
        if (idx > -1) {
          this.map.setFeatureState(
            {
              source: 'parcelles',
              sourceLayer: 'default',
              id: this.selectedStateId,
            },
            { selected: false }
          )
          this.parcelleSelected.splice(idx, 1)
          this.parcelleSelectedInfos.splice(idx, 1)
        } else {
          this.parcelleSelected.push(this.selectedStateId)
          this.parcelleSelectedInfos.push({
            parcelleId: event.features[0].properties.parcelle_id,
            arpente: event.features[0].properties.arpente,
            commune: event.features[0].properties.commune,
            contenance: event.features[0].properties.contenance,
            created: event.features[0].properties.created_date,
            numero: event.features[0].properties.numero,
            prefixe: event.features[0].properties.prefixe,
            section: event.features[0].properties.section,
            updated: event.features[0].properties.updated_date,
          })
          this.map.setFeatureState(
            {
              source: 'parcelles',
              sourceLayer: 'default',
              id: this.selectedStateId,
            },
            { selected: true }
          )
        }
        this.$emit('update:parcelleSelectedInfos', this.parcelleSelectedInfos)
        this.parcelleCliked = true
        // this.onParcelleClicked(event)
      })

      const myPopup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: true,
      })

      this.map.on('mousemove', 'parcelles-layer', (event: any) => {
        const infos = `
        <div class="text-p-sm">
          <div class="text-left text-grey05">
            Identifiant parcelle
          </div> 
          <div class="text-left">
            ${event.features[0].properties.parcelle_id}
          </div>
          <div class="w-full pt-2">
            <div class="float-left text-input-sm text-grey05 w-1/3 text-center">
              Section 
              <div class="text-white text-p-sm">
                ${event.features[0].properties.prefixe} ${event.features[0].properties.section}
              </div>
            </div>
            <div class="float-left text-input-sm text-grey05 w-1/3 text-center">
              Numero
              <div class="text-white text-p-sm">
                ${event.features[0].properties.numero}
              </div>
            </div>
            <div class="float-left text-input-sm text-grey05 w-1/3 text-center">
              Contenance 
              <div class="text-white text-p-sm">
                ${event.features[0].properties.contenance} m²
              </div>
            </div>
          </div>
        </div>`

        myPopup.setLngLat(event.lngLat).setHTML(infos).addTo(this.map)
      })
      this.map.on('mouseleave', 'parcelles-layer', () => {
        this.map.getCanvas().style.cursor = ''
        myPopup.remove()
      })

      if (this.parcelleSelectedInfos.length > 0) {
        this.selectParcelle()
      }
    },

    selectParcelle() {
      this.parcelleSelectedInfos.forEach((item: any) => {
        this.map.setFeatureState(
          {
            source: 'parcelles',
            sourceLayer: 'default',
            id: item.parcelleId,
          },
          { selected: true }
        )
      })
    },

    changeMapStyle() {
      this.mapStyle = this.mapStyle === 'vector' ? 'ortho' : 'vector'
      this.map.setStyle(this.styles[this.mapStyle])
      this.mapLoaded = false
      this.mapStyleChanged = true
      this.map.on('styledata', () => {
        this.loadCustomLayers()
        this.parcelleSelectedInfos.forEach((item: any) => {
          this.map.setFeatureState(
            {
              source: 'parcelles',
              sourceLayer: 'default',
              id: item.parcelleId,
            },
            { selected: true }
          )
        })
        if (this.isReady) {
          this.isReady = true
        }
      })
    },

    onMouseMove(event: any, source: string) {
      const canvas = this.map.getCanvas()
      canvas.style.cursor = 'pointer'

      if (event.features.length > 0) {
        if (this.hoveredStateId !== null) {
          this.hoverableSources.map((source) => {
            this.map.setFeatureState(
              {
                source,
                sourceLayer: 'default',
                id: this.hoveredStateId,
              },
              { hover: false }
            )
          })
        }
        this.hoveredStateId = event.features[0].properties.parcelle_id
      }

      this.map.setFeatureState(
        { source, sourceLayer: 'default', id: this.hoveredStateId },
        { hover: true }
      )
    },

    onMouseLeave(source: string) {
      const canvas = this.map.getCanvas()
      canvas.style.cursor = ''
      if (this.hoveredStateId !== null) {
        this.map.setFeatureState(
          { source, sourceLayer: 'default', id: this.hoveredStateId },
          { hover: false }
        )
      }
    },
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.mapboxgl-canvas-container {
  cursor: pointer !important;
}

.mapboxgl-canvas {
  outline: none;
}

.mapboxgl-popup {
  position: absolute;
  top: -10px;
  padding: 10px 15px;
  pointer-events: none;
  background-color: rgba(39, 42, 58, 0.8);
  color: white;
  border-radius: 10px;
  width: 200px;
}
</style>
