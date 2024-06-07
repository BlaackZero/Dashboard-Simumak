import { MainLayout } from "../../layout/MainLayout"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useUsersStore } from "../../store/users/useUsersStore";
import { IconInfoHexagon } from "@tabler/icons-react";
import { getUser } from "../../actions/users";
import { useEffect, useState } from "react";
import { UsersDetail } from "../../components/UsersDetail/UsersDetail";
import { Modal } from "../../components/Modal/Modal";
import { User } from "../../interface/users-response";
import { ProgressSpinner } from 'primereact/progressspinner';

export const UsersPage = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { usersInfo, fetchUsers } = useUsersStore();


  useEffect(() => {
    usersInfo === null && fetchUsers();
  }, [])



  const handleModalInfo = async (id: string) => {
    document.body.style.overflow = 'hidden';
    setModalStatus(true);
    console.log(id);
    try {
      const data = await getUser(id);
      console.log(data);
      if (data) {
        setSelectedUser(data);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleCloseModal = () => {
    document.body.style.overflow = 'auto';
    setModalStatus(false);
    setSelectedUser(null);
  };

  return (
    <MainLayout>
      <h1><strong>Lista de Usuarios</strong></h1>
      {/* <input
        className="buscador"
        type="text"
        name=""
        id=""
        placeholder="Buscar Colaborador"
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase();
          const filteredSolicitudes = solicitudes.filter(
            (solicitud) =>
              solicitud.NombreCompleto.toLowerCase().includes(searchTerm)
          );
          setSolicitudesFilter(filteredSolicitudes);
        }}
      /> */}
      <section className="table">
        <DataTable
          removableSort
          emptyMessage="No se encontraron usuarios"
          value={usersInfo?.users}
          tableStyle={{ minWidth: '50rem' }}
          stripedRows
          paginator
          rows={10}
          rowsPerPageOptions={[10,25, 50, 100]}
        >
          <Column field="user.member_id" header="Id" sortable></Column>
          <Column field="user.name" header="Nombre Usuario"></Column>
          <Column
            header="Mas Información"
            body={(rowData) => (
              <div className="actions">
                <button className="tableButton" onClick={() => handleModalInfo(rowData.user.member_id)}><IconInfoHexagon size={24} stroke={2} /></button>
              </div>
            )}
          />
        </DataTable>
      </section>
      {modalStatus && (
        <Modal handleModal={handleCloseModal} title="Detalle Usuario">
          {selectedUser == null ?
          <div style={{display: "flex", justifyContent: "center"}}> 
            <ProgressSpinner />
          </div>
          : 
          <UsersDetail dataUser={selectedUser} />}
        </Modal>
      )}
    </MainLayout>
  )
}
