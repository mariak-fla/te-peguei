import { useState } from 'react'
import {
    ShieldAlert,
    Frown,
    Smile,
    SmilePlus,
    CakeSlice,
    ShoppingBag,
    SquareAsterisk,
    BookMarked,
    VenetianMask,
    Sparkles,
    Languages,
    ClipboardList,
    CloudRain,
    Armchair,
    CircleDollarSign,
    PenSquare,
    SquareDashedBottom,
    HelpingHand,
    PencilLine,
    Camera,
    Search,
    WholeWord,
    Mic2,
    HelpCircle,
    Laugh,
    ArrowUpToLine,
    Palette,
    PersonStanding,
    Fish,
    Wine,
    Annoyed,
    KeyRound,
    Ear,
    Heart,
    Volume2,
    Clapperboard,
    Users2,
    ArrowUpWideNarrow,
    CloudSun,
    Bed,
    Shapes,
    Dices,
    Clock,
    Hand,
    Speech,
    Compass,
    Angry,
    Music,
    Pointer,
    HeartPulse,
    Bug,
    Pill,
    Shirt,
    Cat,
    Bird,
    BookOpen,
    Footprints,
    Skull,
    Radiation,
    PenLine,
    CalendarDays,
    Timer,
    Disc3,
    User2,
    Cake,
    Bot,
    PencilRuler
} from 'lucide-react';
import { CardProps } from '@/types';
import { CardDetails } from './';


const Card = ({ text, icon }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)
  const [isRejected, setIsRejected] = useState(false)

  const handleAccept = () => {
    setIsAccepted(true);
    setIsRejected(false);
    setIsOpen(false);
  };

  const handleReject = () => {
    setIsRejected(true);
    setIsAccepted(false);
    setIsOpen(false);
  };

    let iconComponent;

    switch (icon) {
        case 'ShieldAlert':
            iconComponent = <ShieldAlert size={40} strokeWidth={1.85} />;
            break;
        case 'Smile':
            iconComponent = <Smile size={40} strokeWidth={1.85} />;
            break;
        case 'Bot':
            iconComponent = <Bot size={40} strokeWidth={1.85} />;
            break;
        case 'CalendarDays':
            iconComponent = <CalendarDays size={40} strokeWidth={1.85} />;
            break;
        case 'Disc3':
            iconComponent = <Disc3 size={40} strokeWidth={1.85} />;
            break;
        case 'Cake':
            iconComponent = <Cake size={40} strokeWidth={1.85} />;
            break;
        case 'User2':
            iconComponent = <User2 size={40} strokeWidth={1.85} />;
            break;
        case 'Timer':
            iconComponent = <Timer size={40} strokeWidth={1.85} />;
            break;
        case 'Radiation':
            iconComponent = <Radiation size={40} strokeWidth={1.85} />;
            break;
        case 'PenLine':
            iconComponent = <PenLine size={40} strokeWidth={1.85} />;
            break;
        case 'Frown':
            iconComponent = <Frown size={40} strokeWidth={1.85} />;
            break;
        case 'PencilRuler':
            iconComponent = <PencilRuler size={40} strokeWidth={1.85} />;
            break;
        case 'SmilePlus':
            iconComponent = <SmilePlus size={40} strokeWidth={1.85} />;
            break;
        case 'CakeSlice':
            iconComponent = <CakeSlice size={40} strokeWidth={1.85} />;
            break;
        case 'ShoppingBag':
            iconComponent = <ShoppingBag size={40} strokeWidth={1.85} />;
            break;
        case 'SquareAsterisk':
            iconComponent = <SquareAsterisk size={40} strokeWidth={1.85} />;
            break;
        case 'BookMarked':
            iconComponent = <BookMarked size={40} strokeWidth={1.85} />;
            break;
        case 'VenetianMask':
            iconComponent = <VenetianMask size={40} strokeWidth={1.85} />;
            break;
        case 'Sparkles':
            iconComponent = <Sparkles size={40} strokeWidth={1.85} />;
            break;
        case 'Languages':
            iconComponent = <Languages size={40} strokeWidth={1.85} />;
            break;
        case 'ClipboardList':
            iconComponent = <ClipboardList size={40} strokeWidth={1.85} />;
            break;
        case 'CloudRain':
            iconComponent = <CloudRain size={40} strokeWidth={1.85} />;
            break;
        case 'Armchair':
            iconComponent = <Armchair size={40} strokeWidth={1.85} />;
            break;
        case 'CircleDollarSign':
            iconComponent = <CircleDollarSign size={40} strokeWidth={1.85} />;
            break;
        case 'PenSquare':
            iconComponent = <PenSquare size={40} strokeWidth={1.85} />;
            break;
        case 'SquareDashedBottom':
            iconComponent = <SquareDashedBottom size={40} strokeWidth={1.85} />;
            break;
        case 'HelpingHand':
            iconComponent = <HelpingHand size={40} strokeWidth={1.85} />;
            break;
        case 'PencilLine':
            iconComponent = <PencilLine size={40} strokeWidth={1.85} />;
            break;
        case 'Camera':
            iconComponent = <Camera size={40} strokeWidth={1.85} />;
            break;
        case 'Search':
            iconComponent = <Search size={40} strokeWidth={1.85} />;
            break;
        case 'WholeWord':
            iconComponent = <WholeWord size={40} strokeWidth={1.85} />;
            break;
        case 'Mic2':
            iconComponent = <Mic2 size={40} strokeWidth={1.85} />;
            break;
        case 'HelpCircle':
            iconComponent = <HelpCircle size={40} strokeWidth={1.85} />;
            break;
        case 'Laugh':
            iconComponent = <Laugh size={40} strokeWidth={1.85} />;
            break;
        case 'ArrowUpToLine':
            iconComponent = <ArrowUpToLine size={40} strokeWidth={1.85} />;
            break;
        case 'Palette':
            iconComponent = <Palette size={40} strokeWidth={1.85} />;
            break;
        case 'PersonStanding':
            iconComponent = <PersonStanding size={40} strokeWidth={1.85} />;
            break;
        case 'Fish':
            iconComponent = <Fish size={40} strokeWidth={1.85} />;
            break;
        case 'Wine':
            iconComponent = <Wine size={40} strokeWidth={1.85} />;
            break;
        case 'Annoyed':
            iconComponent = <Annoyed size={40} strokeWidth={1.85} />;
            break;
        case 'KeyRound':
            iconComponent = <KeyRound size={40} strokeWidth={1.85} />;
            break;
        case 'Ear':
            iconComponent = <Ear size={40} strokeWidth={1.85} />;
            break;
        case 'Heart':
            iconComponent = <Heart size={40} strokeWidth={1.85} />;
            break;
        case 'Volume2':
            iconComponent = <Volume2 size={40} strokeWidth={1.85} />;
            break;
        case 'Clapperboard':
            iconComponent = <Clapperboard size={40} strokeWidth={1.85} />;
            break;
        case 'Users2':
            iconComponent = <Users2 size={40} strokeWidth={1.85} />;
            break;
        case 'ArrowUpWideNarrow':
            iconComponent = <ArrowUpWideNarrow size={40} strokeWidth={1.85} />;
            break;
        case 'CloudSun':
            iconComponent = <CloudSun size={40} strokeWidth={1.85} />;
            break;
        case 'Bed':
            iconComponent = <Bed size={40} strokeWidth={1.85} />;
            break;
        case 'Shapes':
            iconComponent = <Shapes size={40} strokeWidth={1.85} />;
            break;
        case 'Dices':
            iconComponent = <Dices size={40} strokeWidth={1.85} />;
            break;
        case 'Clock':
            iconComponent = <Clock size={40} strokeWidth={1.85} />;
            break;
        case 'Hand':
            iconComponent = <Hand size={40} strokeWidth={1.85} />;
            break;
        case 'Speech':
            iconComponent = <Speech size={40} strokeWidth={1.85} />;
            break;
        case 'Compass':
            iconComponent = <Compass size={40} strokeWidth={1.85} />;
            break;
        case 'Angry':
            iconComponent = <Angry size={40} strokeWidth={1.85} />;
            break;
        case 'Music':
            iconComponent = <Music size={40} strokeWidth={1.85} />;
            break;
        case 'Pointer':
            iconComponent = <Pointer size={40} strokeWidth={1.85} />;
            break;
        case 'HeartPulse':
            iconComponent = <HeartPulse size={40} strokeWidth={1.85} />;
            break;
        case 'Bug':
            iconComponent = <Bug size={40} strokeWidth={1.85} />;
            break;
        case 'Pill':
            iconComponent = <Pill size={40} strokeWidth={1.85} />;
            break;
        case 'Shirt':
            iconComponent = <Shirt size={40} strokeWidth={1.85} />;
            break;
        case 'Cat':
            iconComponent = <Cat size={40} strokeWidth={1.85} />;
            break;
        case 'Bird':
            iconComponent = <Bird size={40} strokeWidth={1.85} />;
            break;
        case 'BookOpen':
            iconComponent = <BookOpen size={40} strokeWidth={1.85} />;
            break;
        case 'Footprints':
            iconComponent = <Footprints size={40} strokeWidth={1.85} />;
            break;
        case 'Skull':
            iconComponent = <Skull size={40} strokeWidth={1.85} />;
            break;
        default:
            iconComponent = null;
    }

    return (
        
        <div className={`w-full py-3 px-6 border dark:border-white/50 border-black/85 rounded-2xl flex flex-col gap-5 hover:scale-105 duration-200 cursor-pointer ${
            isAccepted ? 'dark:bg-lime-600 bg-lime-400' : isRejected ? 'dark:bg-red-600 bg-red-400' : ''
          }`} onClick={() => setIsOpen(true)}>
            <div className="flex justify-between w-full items-center">
                <h3 className={`dark:text-slate-300 text-slate-700 w-3/4 text-lg ${isAccepted || isRejected ? 'hidden' : ''}`}>{text}</h3>
                <p className={`dark:text-slate-300 text-slate-700 text-xl ${isAccepted || isRejected ? 'hidden' : ''}`}>
                    {iconComponent}
                </p>
        {isAccepted && (
          <div className="flex items-center justify-center w-full max-w-[90vw] gap-5">
            <h3 className="text-white font-extrabold font text-2xl uppercase">missão cumprida!</h3>
            <div className="text-white "> <Smile size={40} strokeWidth={1.85} /> 
            </div>  
          </div>
        )}

        {isRejected && (
          <div className="flex items-center justify-center w-full max-w-[90vw] gap-5">
            <h3 className="text-white font-extrabold font text-2xl uppercase">MISSÃO FRACASSADA</h3>
            <div className="text-white"><Frown size={40} strokeWidth={1.85}/>
            </div>
          </div>
        )}
            </div>

            <CardDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} text={text} icon={icon} onAccept={handleAccept} onReject={handleReject}/>
        </div>
    );
}



export default Card