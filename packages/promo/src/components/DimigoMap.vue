<template>
  <GmapMap
    :center="{lat: 37.3418931, lng: 126.8315179}"
    :zoom="16"
    class="map"
    map-type-id="roadmap"
  >
    <GmapMarker
      :position="{lat: 37.3418931, lng: 126.8315179}"
    />
  </GmapMap>
</template>

<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
