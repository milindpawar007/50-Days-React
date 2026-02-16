// components/NoteList.tsx
import type { NoteObj } from "./Canvas";
import NoteCard from "./NoteCard";

type NoteListProps = {
  notes: NoteObj[];
  deleteNote:(noteId:string)=>void;
};

export default function NoteList({ notes ,deleteNote }: NoteListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}
