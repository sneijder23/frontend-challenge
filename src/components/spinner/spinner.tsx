import { ClipLoader } from "react-spinners";

export default function Spinner(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        height: '100vh',
      }}
    >
      <div>
        <p style={{ fontSize: 14, color: '#000000' }}>... загружаем еще котиков ...</p>
        <div style={{ marginTop: 20, marginLeft: 34 }}>
          <ClipLoader color="#3671d6" loading size={100} />
        </div>
      </div>
    </div>
  );
}