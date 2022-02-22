import React, { useState, useEffect, Suspense } from "react"

import { Color } from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import ThreeGlobe from "three-globe"
import countries from "../files/globe-data-min.json"
import travelHistory from "../files/travelHistory.json"

import { keyframes } from "@emotion/react"

export default function Globe() {
  const [myGlobe, setGlobe] = useState({})
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        // Initialize the Globe
        const Earth = new ThreeGlobe({
          waitForGlobeReady: true,
          animateIn: true,
        })
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.55)
          .showAtmosphere(true)
          .atmosphereColor("#3a228a")
          .atmosphereAltitude(0.25)
          .hexPolygonColor((e) => {
            if (
              [
                "ITA",
                "FJI",
                "ALB",
                "CHE",
                "GBR",
                "HRV",
                "DEU",
                "BIH",
                "USA",
                "SVK",
                "BGR",
                "ISL",
                "NOR",
                "SVN",
                "FRA",
                "CAN",
                "AUT",
                "BEL",
                "POL",
                "FIN",
                "LTU",
                "AND",
                "CHL",
                "ESP",
                "NLD",
                "CZE",
                "SRB",
                "SWE",
                "PRT",
                "RUS",
                "HUN",
                "AUS",
                "LVA",
                "JPN",
                "EST",
                "GEO",
                "JOR",
                "UKR",
              ].includes(e.properties.ISO_A3)
            ) {
              return "rgba(255,255,255, 1)"
            } else return "rgba(255,255,255, 0.45)"
          })

        // Earth.rotateY(-Math.PI * (1 / 9))
        // Earth.rotateZ(-Math.PI / 6)
        Earth.lookAt(0, -40, 60)
        const globeMaterial = Earth.globeMaterial()
        globeMaterial.color = new Color(0x3a228a)
        globeMaterial.emissive = new Color(0x220038)
        globeMaterial.emissiveIntensity = 0.1
        globeMaterial.shininess = 0.7
        // globeMaterial.wireframe = true;

        setGlobe(Earth)

        setTimeout(() => {
          setRendered(true)
        }, 500)

        // Handle lines
        Earth.arcsData(travelHistory.flights)
          .arcColor((e) => {
            return e.status ? "#49D49D" : "#FF4000"
          })
          .arcAltitude((e) => {
            return e.arcAlt
          })
          .arcStroke((e) => {
            return e.status ? 0.7 : 0.3
          })
          .arcDashLength(0.9)
          .arcDashGap(4)
          .arcDashAnimateTime(1000)
          .arcsTransitionDuration(1000)
          .arcDashInitialGap((e) => e.order * 1)
      }, 500)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const Lights = () => {
    return (
      <>
        <ambientLight color={"#BBBBBB"} intensity={0.3} />
        <directionalLight
          color={"#FFFFFF"}
          position={[-800, 400, 400]}
          intensity={0.8}
        />
        <directionalLight
          color={"#7982f6"}
          position={[-200, 100, 200]}
          intensity={1}
        />
        <directionalLight
          color={"#8566cc"}
          position={[-200, 100, 200]}
          intensity={0.5}
        />
      </>
    )
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "calc(50vw - 55px)",
          visibility: !rendered ? "visible" : "hidden",
          opacity: !rendered ? 1 : 0,
          transition: !rendered ? "" : "visibility 0s 1s, opacity 1s linear",
        }}
      >
        <h3 style={{ lineHeight: "40vh" }}>Loading...</h3>
      </div>
      <Canvas
        style={{
          height: "40vh",
          // visibility: !rendered ? "hidden" : "visible",
          opacity: !rendered ? 0 : 1,
          transition: !rendered ? "" : "visibility 0s 2s, opacity 4s ease-in",
        }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.01}
          minDistance={200}
          maxDistance={500}
          rotateSpeed={0.8}
        />
        <Lights />
        <fog color={"#535ef3"} near={400} far={2000} />
        <Suspense fallback={null}>
          <primitive object={myGlobe} />
        </Suspense>
      </Canvas>
    </>
  )
}
