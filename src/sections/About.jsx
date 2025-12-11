import Card from "../components/Card"
import {useRef} from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
    const containerRef = useRef(null);
  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
        md:auto-rows-[18rem] mt-12">
            {/* grid 1 */}
            <div className="flex items-end grid-default-color 
            grid-1">
                <img src="assets/coding-pov.png" alt="coding-img"
                className="absolute scale-[1.75] -right-[5rem] -top-
                [2rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" 
                />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Selva Sreenath</p>
                    <p className="subtext lg:pb-8 font-xl">
                        Over the last 3 years, I developed my frontend and backend dev skills to deliver dymnamic and responsive software and web applications.
                    </p>
                    <div className="absolute inset-x-0 pointer-events-none
                    -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t  from-indigo"/>
                </div>
            </div>
            {/* grid 2 */}
            <div className="grid-default-color grid-2">
      <div
        ref={containerRef}
        className="card-container relative flex items-center justify-center overflow-hidden w-full h-full"
      >
        <p className="flex items-end text-5xl text-gray-500">
          CODE IS CRAFT
        </p>

        <Card
          style={{ rotate: "15deg", top: "30%", left: "4%" }}
          text="GRASP"
          dragConstraints={containerRef}
        />
        <Card
          style={{ rotate: "-25deg", top: "20%", right: "5%" }}
          text="SOLID"
          dragConstraints={containerRef}
        />
        <Card
          style={{ rotate: "75deg", top: "30%", left: "20%" }}
          text="DESIGN"
          dragConstraints={containerRef}
        />
        <Card
          style={{ rotate: "90deg", bottom: "10%", left: "40%" }}
          text="DEVELOP"
          dragConstraints={containerRef}
        />
        <Card
          style={{ rotate: "-15deg", bottom: "20%", left: "60%" }}
          image="assets/logos/csharp-pink.png"
          dragConstraints={containerRef}
        />
        <Card
          style={{ rotate: "-45deg", top: "50%", right: "6%" }}
          image="assets/logos/dotnet-pink.png"
          dragConstraints={containerRef}
        />
        <Card
          style={{ rotate: "-15deg", bottom: "35%", left: "6%" }}
          image="assets/logos/blazor-pink.png"
          dragConstraints={containerRef}
        />
      </div>
    </div>
            {/* grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[-50%]">
                  <div className="headtext">Time Zone</div>
                  <p className="subtext">I'm based in Mars, and open to remote <br /> work worldwide.</p>
                </div>
                <figure className="absolute left-[30%] top-[15%]">
                  <Globe/>
                </figure>
            </div>
            {/* grid 4 */}
            <div className="grid-special-color grid-4">
              <div className="flex flex-col items-center justify-center 
              gap-4 size-full">
                <p className="text-center headtext">
                  Do you want to start a project together?
                </p>
                <CopyEmailButton/>
              </div>
            </div>
            {/* grid 5 */}
            <div className="grid-default-color grid-5">
              <div className="z-10 w-[50%]">
                <p className="headtext">Tech Stack</p>
                <p className="subtext">I specialize in a variety of languages, frameworks, and tool that
                  allow me to build robust and scalable applications.
                </p>
              </div>
              <div className="absolute inset-y-0 md:inset-y-9 w-full
              h-full start-[50%]
              md:scale-y-125">
                <Frameworks/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About
