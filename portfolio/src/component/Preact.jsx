import { text } from 'ziko';
import ZikoWrapper from 'ziko-wrapper/preact';
const Text=(txt = 'hello world')=> text(txt).style({
  color: 'green',
});
export default function App() {
  return (
    <ZikoWrapper>
      <Text />
      <Text />
    </ZikoWrapper>
  );
}