import { useEffect, useState } from "react";
import InsertNote from "./InsertNote";
import NoteList from "./NoteList";

export type NoteObj = {
  id: string;
  title: string;
  desc: string;
};

export default function Canvas() {
  const [notesData, setNotesData] = useState<NoteObj[]>(() => {
    try {
      const stored = localStorage.getItem("notes");
      return stored ? (JSON.parse(stored) as NoteObj[]) : [];
    } catch {
      return [];
    }
  });

  const handleAddNote = (note: NoteObj) => {
    setNotesData((prev) => [...prev, note]);
  };

  const deleteNote = (noteId: string) => {
    setNotesData((prev) => prev.filter((note) => note.id !== noteId));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesData));
  }, [notesData]);

  return (
    <main className="relative min-h-screen bg-amber-100">
      <InsertNote handelAddNotes={handleAddNote} />

      <div className="pt-52 px-6 pb-10">
        <NoteList notes={notesData} deleteNote={deleteNote} />
      </div>
    </main>
  );
}
