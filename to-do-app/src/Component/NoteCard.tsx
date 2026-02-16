// components/NoteCard.tsx
import type { NoteObj } from "./Canvas";

type NoteCardProps = {
  note: NoteObj;
   deleteNote:(noteId:string)=>void;
};

export default function NoteCard({ note ,deleteNote}: NoteCardProps) {
  return (
    <div className="relative bg-amber-50 text-black p-5 rounded-xl shadow-md mt-10" id={note.id}>
      {/* delete button top-right */}
      <button
        className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        aria-label="Delete note"
        type="button"
        onClick={() => deleteNote( note.id)}
      >
        ✕
      </button>

      <h3 className="text-lg font-semibold mb-2 wrap-anywhere">{note.title}</h3>
      <p className="text-sm text-gray-700 wrap-anywhere">{note.desc}</p>
    </div>
  );
}
