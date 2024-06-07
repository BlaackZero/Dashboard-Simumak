import { User } from "../../interface/users-response";
import { UserDetailContainer } from "./style";
import { Accordion, AccordionTab } from 'primereact/accordion';

interface PropTypes {
    dataUser: User | null;
}

export const UsersDetail = ({ dataUser }: PropTypes) => {
    console.log(dataUser);

    console.log("SESIONES", dataUser?.sessions);
    
    return (
        <>
            {dataUser ? (
                <UserDetailContainer>
                    <p><strong>ID:</strong> {dataUser.member_id}</p>
                    <p><strong>Tipo de Usuario:</strong> {dataUser.user_type}</p>
                    <p><strong>Nombre:</strong> {dataUser.name}</p>
                    <p><strong>Nombre de Usuario:</strong> {dataUser.username}</p>
                    <p><strong>Número Personal:</strong> {dataUser.personal_number}</p>
                    <p><strong>Código de Usuario:</strong> {dataUser.codigo_usuario}</p>
                    <Accordion tabIndex={0}>
                        {dataUser.sessions && 
                        <AccordionTab header="Sesiones">
                            <Accordion>
                                {dataUser.sessions?.map((session, index) => (
                                    <AccordionTab key={index} header={session.session.date ? session.session.date : "Sin Fecha"}>
                                        <p><strong>ID:</strong> {session.session.session_id}</p>
                                        <p><strong>Fecha:</strong> {session.session.date}</p>
                                        <p><strong>Simulador:</strong> {session.session.simulator}</p>
                                        <p><strong>Calificación Final:</strong> {session.session.final_calification ? session.session.final_calification : "Sin calificación"}</p>
                                    </AccordionTab>
                                ))}
                            </Accordion>
                        </AccordionTab>}
                        {dataUser.courses && 
                        <AccordionTab header="Cursos">
                            <Accordion>
                                {dataUser.courses?.map((course, index) => (
                                    <AccordionTab key={index} header={index}>
                                        <p><strong>ID:</strong>{course.course.course_id}</p>
                                        <p><strong>Nombre:</strong>{course.course.name}</p>
                                    </AccordionTab>
                                ))}
                            </Accordion>
                        </AccordionTab>
                        }
                    </Accordion >
                </UserDetailContainer>
            ) : (
                <p>No se encontró información del usuario.</p>
            )}
        </>
    );
};