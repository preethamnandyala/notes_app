import NotesCard from "../NotesCard/NotesCard";

const NotesSection = ({  title = '', notes = [], className = '', isInArchive = false, isImportant = false, isDelete = false }) => (
  notes.length > 0 && (
    <div className={`mx-8 ${className}`}>
      {title && <h2 className="text-xl font-bold text-emerald-600 mb-4 text-center">{title}</h2>}
      <div className="flex flex-wrap gap-4 w-full">
        {notes.map(({ title, text, id, isPinned }) => (
          <div className="flex-grow" key={id}>
            <NotesCard id={id} title={title} text={text} isPinned={isPinned} isInArchive={isInArchive} isImportant={isImportant} isDelete={isDelete}/>
          </div>
        ))}
      </div>
    </div>
  )
);

export default NotesSection