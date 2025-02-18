import IClass from "../interfaces/IClass";

interface IClassCardProps {
  turma: IClass
}

export default function ClassCard({ turma }: IClassCardProps) {
  return (
    <div>
      <div>
        <h2>{turma.name}</h2>
        <strong>{turma.students}/{turma.capacity}</strong>
      </div>
      <div>
        <h3>{turma.day}</h3>
        <strong>{turma.hour}h</strong>
      </div>
    </div>
  );
}
