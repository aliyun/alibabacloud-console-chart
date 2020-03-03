import getPointAtLength from 'point-at-length';
import Utils from '@antv/util';
import * as d3Geo from 'd3-geo';

const geoPath = d3Geo.geoPath;
const geoPathGenerator = geoPath();

function GeoJSONConnector(data: any): any {
  const features: any[] = Utils.deepMix([], data.features);

  // pre-process
  features.forEach((feature) => {
    feature.name = feature.properties.name;
    feature.longitude = [];
    feature.latitude = [];
    const pathData = (feature.pathData = geoPathGenerator(feature));
    const points = getPointAtLength(pathData);
    points._path.forEach((point: any[]) => {
      feature.longitude.push(point[1]);
      feature.latitude.push(point[2]);
    });
    const centroid = geoPathGenerator.centroid(feature);
    feature.centroidX = centroid[0];
    feature.centroidY = centroid[1];
  });

  // dataView.origin = features;
  return features;
}

export default GeoJSONConnector;
