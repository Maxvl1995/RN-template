import React from "react";
import Svg, { Color, Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { screenWidth } from "@utils/UDimension";

interface ILayerCurveProps {
  height?: number;
  colors?: Color[];
}

const LayerCurve: React.FC<ILayerCurveProps> = ({ height, colors }) => {
  const LAYER_HEIGHT = height ?? 10;

  const path = `
    M0 ${LAYER_HEIGHT}
    C${screenWidth * 0.35} -${LAYER_HEIGHT * 0.3}
    ${screenWidth * 0.65} -${LAYER_HEIGHT * 0.3}
    ${screenWidth} ${LAYER_HEIGHT}
    Z
  `;

  return (
    <Svg width={"100%"} height={LAYER_HEIGHT}>
      <Path
        d={path}
        strokeWidth={0}
        stroke={"black"}
        fill="url(#paint0_linear_56_5960)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_56_5960"
          x1={187.5}
          y1={-22}
          x2={187.5}
          y2={517.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors?.[0] ?? "#ffffff"} />
          <Stop stopColor={colors?.[1] ?? "#ffffff"} offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default React.memo(LayerCurve);
