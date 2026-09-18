import Layer1 from './Layer1';
import Layer2 from './Layer2';
import Layer3 from './Layer3';
import Calendar from './Calendar';
// If there is an RSidebar or Body component that also needs to be shown, import them here too!

function Home() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Stack the components your friend built */}
      <Layer1 />
      
      <div style={{ display: 'flex', gap: '24px' }}>
        {/* If Calendar is supposed to sit next to Layer2/3, we can wrap them in a flex row */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Layer2 />
          <Layer3 />
        </div>
        
        <div style={{ width: '350px' }}>
          <Calendar />
        </div>
      </div>

    </div>
  );
}

export default Home;