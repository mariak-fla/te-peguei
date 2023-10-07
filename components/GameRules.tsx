"use client"
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react"

interface GameRulesProps {
    isOpen: boolean;
    closeModal: () => void;
}

function GameRules({ isOpen, closeModal }: GameRulesProps) {
  return (
    <div>
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
                            <Dialog.Panel className="relative w-96 max-w-[95%] max-h-[90vh] overflow-y-auto transform rounded-2xl px-10 py-5 shadow-xl transition-all bg-slate-100 dark:bg-slate-900">
                                <button 
                                    type="button" 
                                    onClick={closeModal} 
                                    className="bg-red-700 hover:bg-red-500 hover:scale-110 duration-200 text-slate-50 shadow-lg rounded-full p-1.5 self-end absolute top-2.5 right-2.5"
                                >
                                    <X size={15} />
                                </button>
                                <h2 className="text-center text-2xl text-slate-800 dark:text-slate-100 font-bold mb-10">Como jogar</h2>
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Seis missões secretas</h3>
                                        <p className="text-slate-500 text-justify">Neste party game, cada jogador começa com seis missões secretas.<br/>Ao completar uma missão, você pode marcá-la como concluída &ndash; mas cuidado! Se suspeitarem que a ação é parte do jogo, <span className="text-red-500 font-bold">você falha a missão</span>!</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Peça a um jogador para fazer o barulho de um animal</h3>
                                        <p className="text-slate-500 text-justify">Cada missão exige que você seja criativo e engane um dos outros jogadores, mas sem que eles suspeitem que a ação faz parte do jogo!</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Melhor de três</h3>
                                        <p className="text-slate-500 text-justify">Este jogo não termina até que alguém complete pelo menos três missões, o que pode acontecer a qualquer momento &ndash; então não abaixe a guarda!</p>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </div>
  )
}

export default GameRules