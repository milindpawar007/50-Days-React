import { useState } from "react";
import type { NoteObj } from "./Canvas";

type InsertNoteProps = {
    handelAddNotes: (obj: NoteObj) => void
}

export default function InsertNote({ handelAddNotes }: InsertNoteProps) {
    const [insetNoteData, setInsetNoteData] = useState<NoteObj>({ id: "", title: "", desc: "" })
    const handelButtonClick = () => {
        if (!insetNoteData.title.trim() && !insetNoteData.desc.trim()) return;

        handelAddNotes({
            id: crypto.randomUUID(),
            title: insetNoteData.title,
            desc: insetNoteData.desc
        });

        setInsetNoteData({ id: "", title: "", desc: "" })
    }
    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-full px-4 mt-6">
            <div className="relative mx-auto max-w-xl bg-amber-50 text-black p-6 rounded-xl shadow-md">
             
                <input
                    name="Title"
                    placeholder="Title"
                    value={insetNoteData.title}
                    onChange={(e) => { setInsetNoteData(p => ({ ...p, title: e.target.value })) }}
                    className="w-full text-lg font-semibold mb-3 outline-none bg-transparent"
                />

                <input
                    name="Desc"
                    value={insetNoteData.desc}
                    placeholder="Take a note..."
                    onChange={(e) => { setInsetNoteData(p => ({ ...p, desc: e.target.value })) }}
                    className="w-full text-sm text-gray-700 outline-none bg-transparent"
                />

    
                <button
                    className="absolute -bottom-4 right-4 w-10 h-10 rounded-full bg-yellow-400 text-white text-xl shadow-md hover:bg-yellow-500 flex items-center justify-center"
                    type="button"
                    onClick={handelButtonClick}
                    aria-label="Add note"
                >
                    ➕
                </button>
            </div>
        </div>
    );
}
