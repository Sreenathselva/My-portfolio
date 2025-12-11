import { img } from "motion/react-client"
import { OrbitingCircles } from "./OrbitingCircles"

export function Frameworks() {
    const skills = [
        "auth0",
        "csharp",
        "css3",
        "git",
        "html5",
        "javascript",
        "tailwindcss",
        "vite.js",
        "dotnet",
        "node.js",
        "typescript",
    ]
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={25}>
        {skills.map((skill,index)=>(
            <Icon key={index} src={`assets/logos/${skill}.svg`}/>
        ))}
      </OrbitingCircles>
      <OrbitingCircles 
        iconSize={30}
        radius={100}
        reverse speed={2}>
        {skills.reverse().map((skill,index)=>(
            <Icon key={index} src={`assets/logos/${skill}.svg`}/>
        ))}
      </OrbitingCircles>
    </div>
  )
}

const Icon=({src}) =>(
    <img src={src} className="duration-200 rounded-sm
    hover:scale-110"  />
)