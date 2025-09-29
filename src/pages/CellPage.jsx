import { TextFallButton } from "@/components/text-fall-button";
import { useNavigate } from "react-router-dom";
const icons = [
    {name: "Army",icon: '/cell/email.svg', URL: 'mailto:rafael.barbosa3.mil@army.mil'},
    {name: "Email",icon: '/cell/email.svg', URL: 'mailto:rafael.barbosa51@gmail.com'},
    {name: "Facebook", icon: '/cell/facebook.svg', URL: 'https://www.facebook.com/rafael.barbosa.58958343'},
    {name: "LinkedIn", icon: '/cell/linkedin.svg', URL: 'https://www.linkedin.com/in/rafaelbarbosa51/'},
    {name: "GitHub", icon: '/cell/github.svg', URL: 'https://github.com/rbarbosa51'},

]
export default function CellPage(){
  const navigate = useNavigate()
    return (
        <div className="relative h-screen flex justify-center items-center overflow-hidden">
          
          <div className="absolute inset-0">
            <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_at_center,#FF7112,transparent)] [&>div]:opacity-30 [&>div]:mix-blend-multiply">
            <div></div>
            <TextFallButton className={'site-button top-4 left-4 relative'} onClick={() => navigate('/')}>Back</TextFallButton>
          </div>
          </div>
          
          <div className="mockup-phone border-blue-900 h-[90%]">
              <div className="mockup-phone-camera"></div>
              <div className="mockup-phone-display">
                <div className='w-full h-full relative flex flex-col'>

                    <img alt="wallpaper" className='absolute inset-0  opacity-90 object-cover'  src="/cell/cellwallpaper.jpg" />
                    <h1 className='neonText bg-black/30 text-5xl z-20 relative mt-14 text-center'>Contact Me</h1>
                    <div className="flex gap-8 flex-wrap justify-center px-4 relative mt-8 items-center ">
                        {icons.map((item, index) => (
                            <div key={index} className="flex flex-col rounded-md px-4  py-2 w-24 h-16  items-center bg-blue-50/80 fill-white cursor-pointer relative z-20" onClick={() => window.open(`${item.URL}`)}>
                                <img width={32} height={32} src={item.icon} className=" " />
                                <div className="text-blue-900">{item.name}</div>
                            </div>
                        ))}
                    </div>

                </div>
              </div>
           </div>
        </div>
          
          
    )
}
// border-[#ff8938] 
{/* <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
            <div class="max-w-3xl text-center">
              <h1 class="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
                Your Next Great
                <span class="text-sky-900">Project</span>
              </h1>
              <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
                Build modern and beautiful websites with this collection of stunning background patterns. 
                Perfect for landing pages, apps, and dashboards.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <button class="rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800">
                  Get Started
                </button>
                <button class="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div> */}