import { TrashIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export const List = () => {
    const [newItem, setNewItem] = useState<{ id: number; value: string } | null>(null);
    const [items, setItems] = useState<{ id: number; value: string }[]>([]);

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <div className="flex mt-4">
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
                </div>
                <div>
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.div 
                                className="flex mb-4 items-center" 
                                key={item.id}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto", transition: { type: 'spring', bounce: 0.3 }}}
                                exit={{ opacity: 0, height: 0, transition: { type: 'spring', bounce: 0.3 }}}
                                transition={{ duration: 0.4, type: 'spring', bounce: 0 }}
                            >
                                <p className="w-full text-grey-darkest">{item.value}</p>
                                <button 
                                    className="flex-no-shrink p-2 ml-2 border-2 rounded border-red-500 text-red-500 cursor-pointer"
                                    onClick={() => {
                                        const newItems = items.filter(oldItem => oldItem.id !== item.id);
                                        setItems(newItems);
                                    }}
                                >
                                    <TrashIcon />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}