import './App.css';

// ㅜ 컴포넌트 목록들 import 하기
import Default_page from './page/default_page';
// ...

function App() {
  return (
    <div className="App">
      {/* ㅜ 렌더링할 컴포넌트들 */}
      <Default_page />
      {/* ... */}
    </div>
  );
}

export default App;
