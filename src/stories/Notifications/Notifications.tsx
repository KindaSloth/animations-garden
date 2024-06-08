import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, X } from "lucide-react";

export const Notifications = () => {
    const [newItem, setNewItem] = useState<{ id: number; value: string } | null>(null);
    const [items, setItems] = useState<{ id: number; value: string }[]>([]);
    
    return (
        <>
            <div className="flex mt-4 w-96 p-6">
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                    placeholder="Add one Item" 
                    name="item" 
                    id="item" 
                    value={newItem?.value || ''}
                    onChange={(e) => {
                        const lastItemId = items.at(-1)?.id || 0;
                        setNewItem({ id: lastItemId + 1, value: e.target.value });
                    }}
                />
                <button 
                    className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:bg-teal"
                    onClick={() => {
                        if (newItem) setItems((prevState) => [...prevState, newItem]);
                        setNewItem(null);
                    }}
                >
                    Add
                </button>
            </div>

            <div className="fixed right-4 top-4 z-40 m-auto flex transform flex-col gap-6 w-96">
                <AnimatePresence>
                    {items.map(item => (
                        <motion.div
                            className="relative w-full rounded-lg border border-black-700 bg-black/80 p-3"
                            key={item.id}
                            initial={{ x: 150, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 150, opacity: 0 }}
                            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                        >
                            <div className="box-border flex flex-row items-start gap-3">
                                <Bell size={24} className="stroke-pink-500" />

                                <div className="grid w-full gap-2">
                                    <p className="text-base font-semibold text-white">{item.value}</p>
                                    <p className="text-sm font-medium text-white">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, dolores quos!
                                    </p>
                                </div>
                            </div>

                            <div 
                                className="absolute -top-3 right-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-pink-500"
                                onClick={() => {
                                    const newItems = items.filter(oldItem => oldItem.id !== item.id);
                                    setItems(newItems);
                                }}
                            >
                                <X size={16} className="fill-black stroke-black" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
}