import { Card } from "./"
import { useState, useEffect } from 'react'
import data from '../data/data.json'

import 'lucide-react'

interface CardData {
    text: string;
    icon: string;
}

const Content = () => {
    const [randomCards, setRandomCards] = useState<CardData[]>([]);

/*     useEffect(() => {
        const selectedCards: CardData[] = [];

        while (selectedCards.length < 6) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!selectedCards.includes(data[randomIndex])) {
                selectedCards.push(data[randomIndex]);
            }
        }

        setRandomCards(selectedCards);
    }, []); */
    useEffect(() => {
        const storedCards = localStorage.getItem('selectedCards');
    
        if (storedCards) {
          setRandomCards(JSON.parse(storedCards));
        } else {
          const selectedCards: CardData[] = [];
    
          while (selectedCards.length < 6) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!selectedCards.includes(data[randomIndex])) {
              selectedCards.push(data[randomIndex]);
            }
          }
    
          setRandomCards(selectedCards);
          localStorage.setItem('selectedCards', JSON.stringify(selectedCards));
        }
      }, []);    
    
    return (
        <div className="h-full w-full max-w-[90vw] mt-24 mx-auto px-5 flex flex-col gap-5 justify-center items-center">
            <div className="mb-5 text-slate-800 dark:text-slate-200 flex items-center justify-between w-[90%]">
                <p>score:</p>
                <h2 className="text-4xl font-bold flex items-end">3<span className="font-normal text-lg">/6</span></h2>
            </div>
            {randomCards.map((card, index) => (
                <Card key={index} text={card.text} icon={card.icon} />
            ))}
        </div>
    )
}

export default Content;