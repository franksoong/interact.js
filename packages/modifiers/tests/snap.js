import test from '@interactjs/_dev/test/test';
import { mockSignals, mockInteractable } from '@interactjs/_dev/test/helpers';

import snap from '@interactjs/modifiers/snap';
import Interaction from '@interactjs/core/Interaction';

test('modifiers/snap', t => {

  const interaction = new Interaction({ signals: mockSignals() });
  interaction.target = mockInteractable();
  interaction.prepared = {};
  interaction._interacting = true;

  const target0 = Object.freeze({ x:  50, y:  100 });
  const options = {
    targets: [
      target0,
    ],
    range: Infinity,
  };
  const status = {
    options,
    delta: { x: 0, y: 0 },
    offset: [{ x: 0, y: 0 }],
  };
  const pageCoords = Object.freeze({ x: 10, y: 20 });
  const arg = {
    interaction,
    status,
    pageCoords,
    coords: { ...pageCoords },
  };

  snap.set(arg);

  t.deepEqual(
    arg.coords,
    target0,
    'snap.set single target, zereo offset'
  );

  t.end();
});
