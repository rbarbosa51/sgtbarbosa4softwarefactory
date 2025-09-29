import { useNavigate } from "react-router-dom"
import { DraggableCardBody,DraggableCardContainer } from "@/components/draggable-card"
import { TextFallButton } from "@/components/text-fall-button";


const cards = [
  {title: 'Loyalty', image: '/cards/Loyalty.jpeg', className: ''},
  {title: 'Duty', image: '/cards/Duty.jpeg', className: ''},
  {title: 'Respect', image: '/cards/Respect2.jpeg', className: ''},
  {title: 'Selfless Service', image: '/cards/SelflessService.jpeg', className: ''},
  {title: 'Honor', image: '/cards/Honor.jpeg', className: ''},
  {title: 'Integrity', image: '/cards/Integrity.jpeg', className: ''},
  {title: 'Personal Courage', image: '/cards/Courage.jpeg', className: ''},
]
export default function ArmyCards() {
const navigate = useNavigate();
  return (
    <DraggableCardContainer className={'relative flex h-screen min-w-full items-center justify-center overflow-clip bg-slate-50'}>
      <h1 className="absolute w-full text-center text-neutral-400 top-0 left-0 text-7xl">Drag cards</h1>
      
      <div className="absolute top-4 left-4">
                    <TextFallButton className={"site-button"} onClick={() => navigate("/hub")}>
                      Back
                    </TextFallButton>
                  </div>
      
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-6xl font-black text-neutral-400  dark:text-neutral-800">
        Army Values
      </p>
      {cards.map((item) => (
        <DraggableCardBody className={item.className}>
          <img src={item.image} className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-400 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  )
}
