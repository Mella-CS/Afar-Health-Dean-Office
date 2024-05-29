(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "downloadEnabled": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_CD556D76_C068_301E_41E5_41DAF483D76D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_CD556D76_C068_301E_41E5_41DAF483D76D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "camera": "this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "camera": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 0)",
   "camera": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.35,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DB197C93_C37F_D704_41E2_6049AE6245EE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -12.09,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DBF01CCC_C37F_D71C_41BF_55589A78D2EF",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_t.jpg",
 "label": "C _ 002",
 "id": "panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62",
   "backwardYaw": -176.9,
   "yaw": -0.42,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "backwardYaw": 8.89,
   "yaw": -15.46,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "backwardYaw": 167.91,
   "yaw": -33.34,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D1F70162_C078_5036_41E1_CE6543CED862",
  "this.overlay_D1E77621_C078_D032_41C2_0823578E57C4",
  "this.overlay_D0F127BE_C36D_7116_41E6_905AB571FEC3"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "gyroscopeEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -122.43,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6562D58_C37F_D104_41CE_53A4210B1E0D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 151.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D60EEDB1_C37F_D104_41B6_78885A4CC2F6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 68.1,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6256D78_C37F_D104_416D_9F13D2F0BB9E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.08,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D636BDA1_C37F_D104_41E6_DA2EB7F27BE5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_t.jpg",
 "label": "M _ 001",
 "id": "panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B",
   "backwardYaw": -21.44,
   "yaw": -37.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "backwardYaw": -19.2,
   "yaw": -110.65,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "backwardYaw": -19.2,
   "yaw": -110.65,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B",
   "backwardYaw": -33.34,
   "yaw": 167.91,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "backwardYaw": 57.57,
   "yaw": 71.35,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D7E90844_C068_5070_41D1_20F8F47AA93A",
  "this.overlay_D7EF573D_C068_3013_41CE_67D80AEF3667",
  "this.overlay_D1C37F47_C366_B177_41E1_8C8C161A8F2D",
  "this.overlay_D1FB6E4D_C366_B37B_41E2_FFB8FB8A75F6"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.47,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6237D82_C37F_D104_41B8_63D3516227F7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_t.jpg",
 "label": "C _ 001",
 "id": "panorama_CD07F2DC_C068_D012_4197_7DE78A511C62",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B",
   "backwardYaw": -0.42,
   "yaw": -176.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "backwardYaw": -5.92,
   "yaw": -28.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D20D7A94_C078_F012_41C8_9B24997937FB",
  "this.overlay_D3C7238A_C078_30F6_41E4_EF18D17853BE",
  "this.overlay_D77678A3_C36D_7F2E_41CF_44C416A1714E"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CD60D562_C068_5036_41E0_2E33B5E45504_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 164.54,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6049DBB_C37F_D104_41E3_6DBEE6C6DFD7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_t.jpg",
 "label": "S _ 001",
 "id": "panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504",
   "backwardYaw": 17.73,
   "yaw": -111.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "backwardYaw": -110.65,
   "yaw": -19.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D2918E44_C365_536A_41D7_C7861EA1B797",
  "this.overlay_D2BFF837_C366_DF17_41BB_F428EDDD709C"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_t.jpg",
 "label": "M _ 003",
 "id": "panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "backwardYaw": -37.58,
   "yaw": -21.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D77C42C1_C06B_F070_41D0_9B83828AE732",
  "this.overlay_D19318F3_C36B_DF2F_41E5_C44BAAD6E0A4",
  "this.overlay_D099DC39_C36B_571A_41E3_17F45A2A79B3"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "duration": 2000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CD556D76_C068_301E_41E5_41DAF483D76D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 146.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6551D3E_C37F_D17C_41E3_B3E111A75E4F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_t.jpg",
 "label": "C _ 003",
 "id": "panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62",
   "backwardYaw": -28.51,
   "yaw": -5.92,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B",
   "backwardYaw": -15.46,
   "yaw": 8.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "backwardYaw": 71.35,
   "yaw": 57.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D47F4AB2_C068_3016_41AB_674A103D3086",
  "this.overlay_D36D8EE2_C068_D036_41E0_04EC8C213D3E",
  "this.overlay_D0B03167_C36F_5137_41D5_053B89DFCBFB"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 158.56,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DBC00CDC_C37F_D73C_41B8_1BAE558E28D8",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_t.jpg",
 "label": "L _ 002",
 "id": "panorama_CD60D562_C068_5036_41E0_2E33B5E45504",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "backwardYaw": -111.9,
   "yaw": 17.73,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CD556D76_C068_301E_41E5_41DAF483D76D",
   "backwardYaw": 50.53,
   "yaw": 168.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D6CCE522_C068_D031_41B3_2A1608BC3CAB",
  "this.overlay_D3D00467_C35D_5736_41D5_FEA431485B5D"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.11,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DBE0DCBC_C37F_D77D_41CB_8AD638630D6D",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 142.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DB317C6A_C37F_D704_41E0_15C3B67320E3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_t.jpg",
 "label": "M _ 002",
 "id": "panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D8629068_C068_5031_41E6_CCD941D6F4D5",
  "this.overlay_D1C9E5BF_C36A_B117_41C6_65D3CD3A02F7",
  "this.overlay_D061420C_C36A_F2F9_41D4_804BC043C9A3"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6590D2E_C37F_D11D_41D4_75F4EA52A57B",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.58,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D6389D91_C37F_D107_41A2_930B81D7DA41",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -108.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D61CFDCA_C37F_D105_41C0_94B64AC44A56",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_t.jpg",
 "label": "L _ 001",
 "id": "panorama_CD556D76_C068_301E_41E5_41DAF483D76D",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504",
   "backwardYaw": 168.99,
   "yaw": 50.53,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D78304D4_C09B_F012_41DB_20F2BD70475A"
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 160.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DBD6DCE6_C37F_D70C_41E6_5C54E5187163",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.01,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_D62C7D68_C37F_D104_41C1_62B24EE95477",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_CD556D76_C068_301E_41E5_41DAF483D76D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_CD556D76_C068_301E_41E5_41DAF483D76D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "camera": "this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.1,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DBEDBCA3_C37F_D704_41E5_9579E7B9AAD9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -162.27,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_DB05BC83_C37F_D70B_41E5_65F59F569DA8",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "height": "100%",
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingLeft": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "class": "Container",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "backgroundOpacity": 0,
 "width": 550,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": 34,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 98,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderRadius": 0,
 "right": "1.27%",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "bottom": "2.51%",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "height": 641,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "paddingTop": 0,
 "height": "100%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "5.247%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "3.14%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container7538"
 },
 "paddingTop": 0,
 "height": "43.457%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "left": "7.24%",
 "backgroundOpacity": 0,
 "width": "76.357%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "3.04%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container4248"
 },
 "paddingTop": 0,
 "height": "76.859%",
 "scrollBarMargin": 2
},
{
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62, this.camera_DBEDBCA3_C37F_D704_41E5_9579E7B9AAD9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5BBCF13_C098_7016_41E7_2CC85E4218DF",
   "pitch": -24.88,
   "yaw": -0.42,
   "hfov": 3.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1F70162_C078_5036_41E1_CE6543CED862",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 3.67,
   "yaw": -0.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE, this.camera_DBE0DCBC_C37F_D77D_41CB_8AD638630D6D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5BBBF14_C098_7012_4181_B3113F2D3728",
   "pitch": -5.6,
   "yaw": -15.46,
   "hfov": 3.68,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1E77621_C078_D032_41C2_0823578E57C4",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 3.68,
   "yaw": -15.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A, this.camera_DBF01CCC_C37F_D71C_41BF_55589A78D2EF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DF7AC0_C36E_B369_41D6_8C0E6EAFEDFD",
   "pitch": -3.49,
   "yaw": -33.34,
   "hfov": 3.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D0F127BE_C36D_7116_41E6_905AB571FEC3",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.34,
   "yaw": -33.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 58,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B, this.camera_D6551D3E_C37F_D17C_41E3_B3E111A75E4F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D3EAB0_C36E_B329_41CA_4A2360A45707",
   "pitch": -20.24,
   "yaw": 167.91,
   "hfov": 4.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7E90844_C068_5070_41D1_20F8F47AA93A",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 4.23,
   "yaw": 167.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B, this.camera_DBC00CDC_C37F_D73C_41B8_1BAE558E28D8); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D39AB0_C36E_B329_41D3_8482D74A2DC4",
   "pitch": -17.7,
   "yaw": -37.58,
   "hfov": 4.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D7EF573D_C068_3013_41CE_67D80AEF3667",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 4.3,
   "yaw": -37.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE, this.camera_D6562D58_C37F_D104_41CE_53A4210B1E0D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D34AB0_C36E_B329_41E6_AB95C377F33B",
   "pitch": -7.83,
   "yaw": 71.35,
   "hfov": 3.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1C37F47_C366_B177_41E1_8C8C161A8F2D",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.32,
   "yaw": 71.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA, this.camera_D6590D2E_C37F_D11D_41D4_75F4EA52A57B); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D2FAB0_C36E_B329_41D3_77F04A994A53",
   "pitch": -8.44,
   "yaw": -110.65,
   "hfov": 3.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1FB6E4D_C366_B37B_41E2_FFB8FB8A75F6",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.31,
   "yaw": -110.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B, this.camera_D6389D91_C37F_D107_41A2_930B81D7DA41); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DCBAC0_C36E_B369_41E4_B8BA93B23613",
   "pitch": -25.02,
   "yaw": -176.9,
   "hfov": 3.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D20D7A94_C078_F012_41C8_9B24997937FB",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 3.87,
   "yaw": -176.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE, this.camera_D636BDA1_C37F_D104_41E6_DA2EB7F27BE5); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5B47F12_C098_7016_41E3_0BDDEB99E829",
   "pitch": -11.95,
   "yaw": -28.51,
   "hfov": 3.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3C7238A_C078_30F6_41E4_EF18D17853BE",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 3.97,
   "yaw": -28.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DC2AC0_C36E_B369_41E5_31D906913545",
   "pitch": -4.92,
   "yaw": -63.92,
   "hfov": 3.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D77678A3_C36D_7F2E_41CF_44C416A1714E",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.33,
   "yaw": -63.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504, this.camera_DB05BC83_C37F_D70B_41E5_65F59F569DA8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D08AB0_C36E_B329_41B0_F6B8503E8F24",
   "pitch": -14.47,
   "yaw": -111.9,
   "hfov": 3.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D2918E44_C365_536A_41D7_C7861EA1B797",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.24,
   "yaw": -111.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A, this.camera_DB197C93_C37F_D704_41E2_6049AE6245EE); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D02AB0_C36E_B329_41E1_CDD65B8DAF66",
   "pitch": -9.19,
   "yaw": -19.2,
   "hfov": 3.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D2BFF837_C366_DF17_41BB_F428EDDD709C",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.3,
   "yaw": -19.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A, this.camera_DB317C6A_C37F_D704_41E0_15C3B67320E3); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DDBAB0_C36E_B329_41D1_322766AF81FE",
   "pitch": -17.96,
   "yaw": -21.44,
   "hfov": 4.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D77C42C1_C06B_F070_41D0_9B83828AE732",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 4.29,
   "yaw": -21.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DD6AB0_C36E_B329_41E1_8E63E258474C",
   "pitch": -2.48,
   "yaw": 18.81,
   "hfov": 3.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D19318F3_C36B_DF2F_41E5_C44BAAD6E0A4",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.34,
   "yaw": 18.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DD1AB0_C36E_B329_41E7_73E68DBE493B",
   "pitch": -4.73,
   "yaw": -58.75,
   "hfov": 3.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D099DC39_C36B_571A_41E3_17F45A2A79B3",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.34,
   "yaw": -58.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD07F2DC_C068_D012_4197_7DE78A511C62, this.camera_D60EEDB1_C37F_D104_41B6_78885A4CC2F6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5BB6F15_C098_7012_41E6_B043DEA60A30",
   "pitch": -13.97,
   "yaw": -5.92,
   "hfov": 4.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D47F4AB2_C068_3016_41AB_674A103D3086",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -5.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B, this.camera_D6049DBB_C37F_D104_41E3_6DBEE6C6DFD7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5BB2F17_C098_701E_41D7_00292C2EF0C6",
   "pitch": -8.37,
   "yaw": 8.89,
   "hfov": 3.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D36D8EE2_C068_D036_41E0_04EC8C213D3E",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 3.61,
   "yaw": 8.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A, this.camera_D61CFDCA_C37F_D105_41C0_94B64AC44A56); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5DEAAC0_C36E_B369_41C4_9C9348C4FEAE",
   "pitch": -8.87,
   "yaw": 57.57,
   "hfov": 3.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D0B03167_C36F_5137_41D5_053B89DFCBFB",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.31,
   "yaw": 57.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD556D76_C068_301E_41E5_41DAF483D76D, this.camera_D6237D82_C37F_D104_41B8_63D3516227F7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D14AB0_C36E_B329_41E1_F3830C04D782",
   "pitch": -13.63,
   "yaw": 168.99,
   "hfov": 4.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6CCE522_C068_D031_41B3_2A1608BC3CAB",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 4.15,
   "yaw": 168.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD07D21B_C068_3015_41CB_FB6928E761CA, this.camera_D6256D78_C37F_D104_416D_9F13D2F0BB9E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D0DAB0_C36E_B329_41DA_D43F5500529F",
   "pitch": -7.7,
   "yaw": 17.73,
   "hfov": 3.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D3D00467_C35D_5736_41D5_FEA431485B5D",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.32,
   "yaw": 17.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D2AAB0_C36E_B329_41D2_C0BCDEF817E0",
   "pitch": -13,
   "yaw": 6.21,
   "hfov": 4.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D8629068_C068_5031_41E6_CCD941D6F4D5",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 6.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D24AB0_C36E_B329_419E_243F198F0746",
   "pitch": -7.27,
   "yaw": -56.12,
   "hfov": 3.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1C9E5BF_C36A_B117_41C6_65D3CD3A02F7",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.32,
   "yaw": -56.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D20AB0_C36E_B329_41E1_732EEB8B08ED",
   "pitch": -5.06,
   "yaw": 33.51,
   "hfov": 3.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D061420C_C36A_F2F9_41D4_804BC043C9A3",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.33,
   "yaw": 33.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_CD60D562_C068_5036_41E0_2E33B5E45504, this.camera_D62C7D68_C37F_D104_41C1_62B24EE95477); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5D1AAB0_C36E_B329_41CA_F9B36032F47D",
   "pitch": -24.22,
   "yaw": 50.53,
   "hfov": 3.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D78304D4_C09B_F012_41DB_20F2BD70475A",
 "data": {
  "label": "Circle 02c"
 },
 "maps": [
  {
   "hfov": 3.89,
   "yaw": 50.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false
},
{
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0.18%",
 "backgroundOpacity": 1,
 "width": 314,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "minWidth": 1,
 "paddingLeft": 0,
 "height": 42,
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "white block"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "backgroundOpacity": 1,
 "width": 314,
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0.01
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": 1,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 53,
 "shadow": true,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "blue block"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 7,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "class": "Label",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 391,
 "data": {
  "name": "text 1"
 },
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "text": "LOREM IPSUM",
 "propagateClick": true,
 "top": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "fontSize": 61,
 "fontColor": "#000000",
 "horizontalAlign": "left",
 "fontStyle": "italic",
 "paddingLeft": 0,
 "height": 75,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "visible",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "height": 110,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "horizontalAlign": "center",
 "gap": 3,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "height": "85.959%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 66,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "paddingTop": 0,
 "height": "100%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "backgroundOpacity": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "- EXPANDED"
 },
 "paddingTop": 0,
 "height": "100%",
 "scrollBarMargin": 2
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "15%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "scrollBarMargin": 2
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "15%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "scrollBarMargin": 2
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "data": {
  "name": "Global"
 },
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "scrollBarMargin": 2,
 "shadowSpread": 1,
 "class": "Container"
},
{
 "class": "Container",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "15%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container8437"
 },
 "paddingTop": 0,
 "height": "21.928%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "71.91%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "23.39%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "Container9886"
 },
 "paddingTop": 0,
 "height": "48.2%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "66.351%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container3396"
 },
 "paddingTop": 0,
 "height": "100%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "77.883%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "Container3434"
 },
 "paddingTop": 0,
 "height": "98.501%",
 "scrollBarMargin": 2
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5BBCF13_C098_7016_41E7_2CC85E4218DF",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5BBBF14_C098_7012_4181_B3113F2D3728",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CCB90C81_C068_D0F5_41D6_DD8640C6260B_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DF7AC0_C36E_B369_41D6_8C0E6EAFEDFD",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D3EAB0_C36E_B329_41CA_4A2360A45707",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D39AB0_C36E_B329_41D3_8482D74A2DC4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D34AB0_C36E_B329_41E6_AB95C377F33B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC8DDD0D_C068_500D_41D0_3A03CC286B1A_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D2FAB0_C36E_B329_41D3_77F04A994A53",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DCBAC0_C36E_B369_41E4_B8BA93B23613",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5B47F12_C098_7016_41E3_0BDDEB99E829",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD07F2DC_C068_D012_4197_7DE78A511C62_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DC2AC0_C36E_B369_41E5_31D906913545",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D08AB0_C36E_B329_41B0_F6B8503E8F24",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD07D21B_C068_3015_41CB_FB6928E761CA_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D02AB0_C36E_B329_41E1_CDD65B8DAF66",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DDBAB0_C36E_B329_41D1_322766AF81FE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DD6AB0_C36E_B329_41E1_8E63E258474C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD6AE4DF_C068_500D_41DA_BF89129DA23B_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DD1AB0_C36E_B329_41E7_73E68DBE493B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5BB6F15_C098_7012_41E6_B043DEA60A30",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5BB2F17_C098_701E_41D7_00292C2EF0C6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CC9394E9_C068_3035_41E6_83250BCF1ABE_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5DEAAC0_C36E_B369_41C4_9C9348C4FEAE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D14AB0_C36E_B329_41E1_F3830C04D782",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD60D562_C068_5036_41E0_2E33B5E45504_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D0DAB0_C36E_B329_41DA_D43F5500529F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D2AAB0_C36E_B329_41D2_C0BCDEF817E0",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D24AB0_C36E_B329_419E_243F198F0746",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD2988E6_C068_703F_41E2_CFE8B9C9C520_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D20AB0_C36E_B329_41E1_732EEB8B08ED",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_CD556D76_C068_301E_41E5_41DAF483D76D_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_D5D1AAB0_C36E_B329_41CA_F9B36032F47D",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "8.75%",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "67.391%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "ministry of revenue"
 },
 "paddingTop": 0,
 "maxWidth": 635
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "32.903%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "19.43%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "60.377%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image5496"
 },
 "paddingTop": 0,
 "maxWidth": 167
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "79.355%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "98.113%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11167"
 },
 "paddingTop": 0,
 "maxWidth": 469
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "94.34%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11246"
 },
 "paddingTop": 0,
 "maxWidth": 880
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "46.774%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "20.75%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "47.17%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11319"
 },
 "paddingTop": 0,
 "maxWidth": 321
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "50.645%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "16.98%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "49.057%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11499"
 },
 "paddingTop": 0,
 "maxWidth": 395
},
{
 "maxHeight": 59,
 "class": "Image",
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "53.226%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "11.32%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "62.264%",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Image11621"
 },
 "paddingTop": 0,
 "maxWidth": 396
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 60,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 58,
 "class": "Image",
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "backgroundOpacity": 0,
 "width": "45.71%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "10.163%",
 "shadow": false,
 "data": {
  "name": "Image5138"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "class": "Image",
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "8.167%",
 "shadow": false,
 "data": {
  "name": "Image4905"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "Container",
 "height": "100%",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundOpacity": 0.4,
 "width": 36,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container black"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "maxHeight": 80,
 "class": "IconButton",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "backgroundOpacity": 0,
 "width": 50,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingRight": 0,
 "bottom": "40%",
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80
},
{
 "class": "Container",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "height": "100%",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "width": "90%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "maxHeight": 50,
 "class": "IconButton",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "width": 50,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "borderRadius": 0,
 "right": 9,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingRight": 0,
 "bottom": "40%",
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 50
},
{
 "class": "HTMLText",
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "backgroundOpacity": 0,
 "width": "30.303%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "minHeight": 1,
 "paddingBottom": 10,
 "propagateClick": false,
 "top": "5.97%",
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.76vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:0.76vmin;font-family:'Segoe UI';\"/></p></div>",
 "data": {
  "name": "HTMLText5367"
 },
 "paddingTop": 10,
 "height": "5.236%",
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "minWidth": 460,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "Container",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 140,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minHeight": 1,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingRight": 70,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "itemLabelFontFamily": "Oswald",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "shadow": false,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "height": "92%",
 "itemPaddingLeft": 3,
 "class": "ThumbnailGrid",
 "selectedItemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "paddingLeft": 70,
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "class": "WebFrame",
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "data": {
  "name": "WebFrame"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": true,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "99.975%",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingLeft": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "class": "Container",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 140,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "height": "100%",
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundOpacity": 1,
 "width": "55%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "height": "100%",
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundOpacity": 1,
 "width": "45%",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 60,
 "minWidth": 460,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "paddingLeft": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "width": "25%",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "left": "7.87%",
 "backgroundOpacity": 0,
 "width": 71,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingRight": 0,
 "bottom": "1.5%",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "toggle",
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 61,
 "shadow": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 84,
 "class": "Image",
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "backgroundOpacity": 0,
 "width": "60.938%",
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "right": "3.13%",
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "top": "3.5%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "42.529%",
 "shadow": false,
 "data": {
  "name": "Image2783"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 84
},
{
 "maxHeight": 84,
 "class": "Image",
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "backgroundOpacity": 0,
 "width": "57.813%",
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "right": "4.69%",
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "30.53%",
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "28.5%",
 "shadow": false,
 "data": {
  "name": "Image2877"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 84
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "width": 44,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingRight": 0,
 "bottom": "4.5%",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 44,
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 998,
 "class": "Image",
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "6.786%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "1.63%",
 "borderSize": 0,
 "minWidth": 1,
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "5.865%",
 "shadow": false,
 "data": {
  "name": "Image3661"
 },
 "paddingTop": 0,
 "maxWidth": 1202
},
{
 "maxHeight": 1185,
 "class": "Image",
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Image4301"
 },
 "paddingTop": 0,
 "maxWidth": 1012
},
{
 "class": "Container",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "height": "100%",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 40,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "paddingRight": 40,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 40,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "- Buttons set"
 },
 "paddingTop": 40,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "maxHeight": 1000,
 "class": "Image",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "maxWidth": 2000
},
{
 "class": "Container",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "gap": 0,
 "paddingLeft": 0,
 "height": 60,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "minWidth": 100,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 40,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "height": "36.14%",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "height": "36.14%",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "class": "ViewerArea",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingLeft": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 50,
 "propagateClick": true,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "borderRadius": 0,
 "right": 10,
 "verticalAlign": "middle",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "bottom": "20%",
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "minWidth": 50,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "height": "10%",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "class": "Image",
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Image40635"
 },
 "paddingTop": 0,
 "maxWidth": 2000
},
{
 "class": "Container",
 "height": "5%",
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "gap": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "height": "100%",
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "minWidth": 100,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 40,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "maxHeight": 1095,
 "class": "Image",
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "verticalAlign": "top",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 40,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "height": "25%",
 "shadow": false,
 "data": {
  "name": "Image Company"
 },
 "paddingTop": 0,
 "maxWidth": 1095
},
{
 "class": "Container",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "top": "26%",
 "paddingRight": 0,
 "bottom": "26%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-Level 1"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "paddingLeft": 0,
 "height": 130,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "-Container footer"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-Level 2-1"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-Level 2-2"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-Level 2-3"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-Level 2-4"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-Level 2-5"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "top": "25%",
 "paddingRight": 0,
 "bottom": "25%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 0,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-Level 2-6"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "class": "HTMLText",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.22vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.38vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.41vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.59vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "class": "Button",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": 180,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "borderRadius": 50,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderSize": 0,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "gap": 5,
 "paddingLeft": 0,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "class": "HTMLText",
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.22vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "height": "46%"
},
{
 "class": "Container",
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "height": "75%",
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "RECEPTION >",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "ROOMS >",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Inserdt Text",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "AMENITIES >",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "SPORTS AREA >",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "SWIMMING POOL >",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "RESTAURANTS >",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 2,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "blue line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "HTMLText",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": 78,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingLeft": 0,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "Container",
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "gap": 7,
 "scrollBarMargin": 2,
 "height": 56,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "Container",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "horizontal",
 "horizontalAlign": "left",
 "gap": 7,
 "scrollBarMargin": 2,
 "height": 44,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 18,
 "label": "BACK",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 8,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Main Entrance",
 "layout": "horizontal",
 "rollOverShadowBlurRadius": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lobby",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Reception",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Reception",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Meeting Area 1",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Meeting Area 2",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Bar",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Chill Out",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Terrace",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Garden",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 0,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 0,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 18,
 "label": "BACK",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 8,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "rollOverShadowBlurRadius": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 18,
 "label": "BACK",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 8,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "rollOverShadowBlurRadius": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 18,
 "label": "BACK",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 8,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "rollOverShadowBlurRadius": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 18,
 "label": "BACK",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 8,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "rollOverShadowBlurRadius": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 30,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontFamily": "Oswald",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingRight": 0,
 "rollOverFontSize": 18,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": 18,
 "label": "BACK",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "paddingLeft": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button <BACK"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "Container",
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "height": 1,
 "shadow": false,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
},
{
 "class": "Container",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 8,
 "shadow": false,
 "contentOpaque": false,
 "paddingLeft": 0,
 "data": {
  "name": "line separator"
 },
 "paddingTop": 0,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 15,
 "class": "Button",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "rollOverShadowBlurRadius": 18,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 7"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 8"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "backgroundOpacity": 0,
 "width": "100%",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 9"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "class": "Button",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "backgroundOpacity": 0,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "paddingLeft": 10,
 "height": 36,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "data": {
  "name": "Button text 10"
 },
 "fontStyle": "italic",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 200,
 "class": "Image",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "backgroundOpacity": 0,
 "width": "25%",
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "verticalAlign": "top",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "maxWidth": 200
},
{
 "class": "HTMLText",
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.38vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.41vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.41vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.41vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.76vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingLeft": 10,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "width": 44,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 44,
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "width": 44,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 44,
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "width": 44,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 44,
 "shadow": false,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "width": 44,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 44,
 "shadow": false,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "width": 44,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 44,
 "shadow": false,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "width": 50,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": false,
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "height": 50,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton --"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
}],
 "minWidth": 20,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "contentOpaque": false,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
