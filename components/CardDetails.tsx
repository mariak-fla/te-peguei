import { Transition, Dialog } from "@headlessui/react"
import { Fragment } from "react";
import {
  ShieldAlert,
  Frown,
  X,
  Check,
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



interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  text: string;
  icon: string;
  onAccept: () => void; 
  onReject: () => void;
}


function CardDetails({ isOpen, closeModal, text, icon, onAccept, onReject }: CardDetailsProps) {
  let iconComponent;

  switch (icon) {
      case 'ShieldAlert':
          iconComponent = <ShieldAlert size={40} strokeWidth={1.25} />;
          break;
      case 'Bot':
          iconComponent = <Bot size={40} strokeWidth={1.25} />;
          break;
      case 'CalendarDays':
          iconComponent = <CalendarDays size={40} strokeWidth={1.25} />;
          break;
      case 'Disc3':
          iconComponent = <Disc3 size={40} strokeWidth={1.25} />;
          break;
      case 'Cake':
          iconComponent = <Cake size={40} strokeWidth={1.25} />;
          break;
      case 'User2':
          iconComponent = <User2 size={40} strokeWidth={1.25} />;
          break;
      case 'Timer':
          iconComponent = <Timer size={40} strokeWidth={1.25} />;
          break;
      case 'Radiation':
          iconComponent = <Radiation size={40} strokeWidth={1.25} />;
          break;
      case 'PenLine':
          iconComponent = <PenLine size={40} strokeWidth={1.25} />;
          break;
      case 'Frown':
          iconComponent = <Frown size={40} strokeWidth={1.25} />;
          break;
      case 'PencilRuler':
          iconComponent = <PencilRuler size={40} strokeWidth={1.25} />;
          break;
      case 'SmilePlus':
          iconComponent = <SmilePlus size={40} strokeWidth={1.25} />;
          break;
      case 'CakeSlice':
          iconComponent = <CakeSlice size={40} strokeWidth={1.25} />;
          break;
      case 'ShoppingBag':
          iconComponent = <ShoppingBag size={40} strokeWidth={1.25} />;
          break;
      case 'SquareAsterisk':
          iconComponent = <SquareAsterisk size={40} strokeWidth={1.25} />;
          break;
      case 'BookMarked':
          iconComponent = <BookMarked size={40} strokeWidth={1.25} />;
          break;
      case 'VenetianMask':
          iconComponent = <VenetianMask size={40} strokeWidth={1.25} />;
          break;
      case 'Sparkles':
          iconComponent = <Sparkles size={40} strokeWidth={1.25} />;
          break;
      case 'Languages':
          iconComponent = <Languages size={40} strokeWidth={1.25} />;
          break;
      case 'ClipboardList':
          iconComponent = <ClipboardList size={40} strokeWidth={1.25} />;
          break;
      case 'CloudRain':
          iconComponent = <CloudRain size={40} strokeWidth={1.25} />;
          break;
      case 'Armchair':
          iconComponent = <Armchair size={40} strokeWidth={1.25} />;
          break;
      case 'CircleDollarSign':
          iconComponent = <CircleDollarSign size={40} strokeWidth={1.25} />;
          break;
      case 'PenSquare':
          iconComponent = <PenSquare size={40} strokeWidth={1.25} />;
          break;
      case 'SquareDashedBottom':
          iconComponent = <SquareDashedBottom size={40} strokeWidth={1.25} />;
          break;
      case 'HelpingHand':
          iconComponent = <HelpingHand size={40} strokeWidth={1.25} />;
          break;
      case 'PencilLine':
          iconComponent = <PencilLine size={40} strokeWidth={1.25} />;
          break;
      case 'Camera':
          iconComponent = <Camera size={40} strokeWidth={1.25} />;
          break;
      case 'Search':
          iconComponent = <Search size={40} strokeWidth={1.25} />;
          break;
      case 'WholeWord':
          iconComponent = <WholeWord size={40} strokeWidth={1.25} />;
          break;
      case 'Mic2':
          iconComponent = <Mic2 size={40} strokeWidth={1.25} />;
          break;
      case 'HelpCircle':
          iconComponent = <HelpCircle size={40} strokeWidth={1.25} />;
          break;
      case 'Laugh':
          iconComponent = <Laugh size={40} strokeWidth={1.25} />;
          break;
      case 'ArrowUpToLine':
          iconComponent = <ArrowUpToLine size={40} strokeWidth={1.25} />;
          break;
      case 'Palette':
          iconComponent = <Palette size={40} strokeWidth={1.25} />;
          break;
      case 'PersonStanding':
          iconComponent = <PersonStanding size={40} strokeWidth={1.25} />;
          break;
      case 'Fish':
          iconComponent = <Fish size={40} strokeWidth={1.25} />;
          break;
      case 'Wine':
          iconComponent = <Wine size={40} strokeWidth={1.25} />;
          break;
      case 'Annoyed':
          iconComponent = <Annoyed size={40} strokeWidth={1.25} />;
          break;
      case 'KeyRound':
          iconComponent = <KeyRound size={40} strokeWidth={1.25} />;
          break;
      case 'Ear':
          iconComponent = <Ear size={40} strokeWidth={1.25} />;
          break;
      case 'Heart':
          iconComponent = <Heart size={40} strokeWidth={1.25} />;
          break;
      case 'Volume2':
          iconComponent = <Volume2 size={40} strokeWidth={1.25} />;
          break;
      case 'Clapperboard':
          iconComponent = <Clapperboard size={40} strokeWidth={1.25} />;
          break;
      case 'Users2':
          iconComponent = <Users2 size={40} strokeWidth={1.25} />;
          break;
      case 'ArrowUpWideNarrow':
          iconComponent = <ArrowUpWideNarrow size={40} strokeWidth={1.25} />;
          break;
      case 'CloudSun':
          iconComponent = <CloudSun size={40} strokeWidth={1.25} />;
          break;
      case 'Bed':
          iconComponent = <Bed size={40} strokeWidth={1.25} />;
          break;
      case 'Shapes':
          iconComponent = <Shapes size={40} strokeWidth={1.25} />;
          break;
      case 'Dices':
          iconComponent = <Dices size={40} strokeWidth={1.25} />;
          break;
      case 'Clock':
          iconComponent = <Clock size={40} strokeWidth={1.25} />;
          break;
      case 'Hand':
          iconComponent = <Hand size={40} strokeWidth={1.25} />;
          break;
      case 'Speech':
          iconComponent = <Speech size={40} strokeWidth={1.25} />;
          break;
      case 'Compass':
          iconComponent = <Compass size={40} strokeWidth={1.25} />;
          break;
      case 'Angry':
          iconComponent = <Angry size={40} strokeWidth={1.25} />;
          break;
      case 'Music':
          iconComponent = <Music size={40} strokeWidth={1.25} />;
          break;
      case 'Pointer':
          iconComponent = <Pointer size={40} strokeWidth={1.25} />;
          break;
      case 'HeartPulse':
          iconComponent = <HeartPulse size={40} strokeWidth={1.25} />;
          break;
      case 'Bug':
          iconComponent = <Bug size={40} strokeWidth={1.25} />;
          break;
      case 'Pill':
          iconComponent = <Pill size={40} strokeWidth={1.25} />;
          break;
      case 'Shirt':
          iconComponent = <Shirt size={40} strokeWidth={1.25} />;
          break;
      case 'Cat':
          iconComponent = <Cat size={40} strokeWidth={1.25} />;
          break;
      case 'Bird':
          iconComponent = <Bird size={40} strokeWidth={1.25} />;
          break;
      case 'BookOpen':
          iconComponent = <BookOpen size={40} strokeWidth={1.25} />;
          break;
      case 'Footprints':
          iconComponent = <Footprints size={40} strokeWidth={1.25} />;
          break;
      case 'Skull':
          iconComponent = <Skull size={40} strokeWidth={1.25} />;
          break;
      default:
          iconComponent = null;
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="relative w-[90%] transform rounded-2xl px-10 py-5 shadow-xl transition-all bg-slate-100 border dark:bg-slate-900 dark:border-white/50 border-black/25">
                  <button
                    type="button" 
                    onClick={closeModal} 
                    className="bg-transparent hover:bg-red-500 hover:scale-110 duration-200 text-slate-50 shadow-lg rounded-full p-1.5 self-end absolute top-1 right-2.5"
                  >
                    <X size={15} />
                  </button>

                  <div className="flex w-full justify-between items-center">
                    <h2 className="dark:text-slate-300 text-slate-700 w-3/4 text-lg">
                      {text}
                    </h2>
                    <p className="dark:text-slate-300 text-slate-700 text-xl">
                      {iconComponent}
                    </p>
                  </div>
                  <div className="absolute z-10 -bottom-11 flex justify-center gap-4 w-[90%]">
                    <button className="bg-lime-500 text-white p-2 rounded-full mr-2 hover:opacity-80 duration-200" onClick={onAccept}> <Check size={20} /></button>
                    <button className="bg-red-500 text-white p-2 rounded-full hover:opacity-80 duration-200" onClick={onReject}> <X size={20} /></button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CardDetails