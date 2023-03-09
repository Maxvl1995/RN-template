import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop, Color } from "react-native-svg";
import { screenHeight, screenWidth } from "@utils/UDimension";

interface ILayerLinearProps {
  height?: number;
  colors?: Color[];
}

const LayerLinear: React.FC<ILayerLinearProps> = ({ height, colors }) => {
  const LAYER_HEIGHT = height ?? screenHeight * 0.3;

  const path = `
    M0 ${LAYER_HEIGHT * 0.95}
    V-${LAYER_HEIGHT * 0.15}
    H${screenWidth}
    V${LAYER_HEIGHT * 0.95}
    C${screenWidth * 0.75} ${LAYER_HEIGHT}
    ${screenWidth * 0.55} ${LAYER_HEIGHT}
    ${screenWidth * 0.5} ${LAYER_HEIGHT}
    C${screenWidth * 0.45} ${LAYER_HEIGHT}
    ${screenWidth * 0.25} ${LAYER_HEIGHT}
    0 ${LAYER_HEIGHT * 0.95}
    Z`;

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
          <Stop stopColor={colors?.[0] ?? "#f2ecf2"} />
          <Stop stopColor={colors?.[1] ?? "#e8f2f6"} offset={1} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default React.memo(LayerLinear);
