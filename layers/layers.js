var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Building1_1 = new ol.format.GeoJSON();
var features_Building1_1 = format_Building1_1.readFeatures(json_Building1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1_1.addFeatures(features_Building1_1);
var lyr_Building1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building1_1, 
                style: style_Building1_1,
                interactive: true,
                title: '<img src="styles/legend/Building1_1.png" /> Building 1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Building1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Building1_1];
lyr_Building1_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'sport': 'sport', 'leisure': 'leisure', 'school_typ': 'school_typ', 'operator_t': 'operator_t', 'religion': 'religion', 'name': 'name', 'evacuation': 'evacuation', 'capacity_p': 'capacity_p', 'building_s': 'building_s', 'building_r': 'building_r', 'building_m': 'building_m', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'backup_gen': 'backup_gen', 'amenity': 'amenity', 'addr_full': 'addr_full', 'addr_city': 'addr_city', 'access_roo': 'access_roo', });
lyr_Building1_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'sport': '', 'leisure': '', 'school_typ': '', 'operator_t': '', 'religion': '', 'name': '', 'evacuation': '', 'capacity_p': '', 'building_s': '', 'building_r': '', 'building_m': '', 'building_l': '', 'building_f': '', 'building_c': '', 'backup_gen': '', 'amenity': '', 'addr_full': '', 'addr_city': '', 'access_roo': '', });
lyr_Building1_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'sport': 'no label', 'leisure': 'no label', 'school_typ': 'no label', 'operator_t': 'no label', 'religion': 'no label', 'name': 'no label', 'evacuation': 'no label', 'capacity_p': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'backup_gen': 'no label', 'amenity': 'no label', 'addr_full': 'no label', 'addr_city': 'no label', 'access_roo': 'no label', });
lyr_Building1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});