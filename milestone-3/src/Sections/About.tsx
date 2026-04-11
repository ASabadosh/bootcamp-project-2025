export default async function AboutPage() {
return (
        <div className="flex gap-20">

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-green-400 text-transparent bg-clip-text pl-5 mb-10">
          About Me
        </h1>
        <div>
        <p className="text-[20px]"> Hello! I'm <strong>Avi Sabadosh</strong> from Oakland, CA. </p> 
        <p className="text-[20px]">  I am a freshman studying Computer Science at Cal Poly</p>
        <p className="text-[20px]">- San Luis Obispo</p>
        </div>
        </div>

        <div className="flex items-center justify-center pt-6">
          <img className="h-[450px]  rounded-2xl object-contain"
          src="/me.jpg" 
          alt="Image of me"/>
        </div>

      </div>
)
}