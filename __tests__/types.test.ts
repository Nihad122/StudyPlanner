import { PRIORITY_COLORS, PRIORITY_LABELS } from '../src/constants/types';

describe('types constants', () => {
  test('PRIORITY_COLORS low icin yesil renk dondurur', () => {
    expect(PRIORITY_COLORS.low).toBe('#10B981');
  });

  test('PRIORITY_COLORS medium icin sari renk dondurur', () => {
    expect(PRIORITY_COLORS.medium).toBe('#F59E0B');
  });

  test('PRIORITY_COLORS high icin kirmizi renk dondurur', () => {
    expect(PRIORITY_COLORS.high).toBe('#EF4444');
  });

  test('PRIORITY_LABELS low icin Dusuk dondurur', () => {
    expect(PRIORITY_LABELS.low).toBe('Düşük');
  });

  test('PRIORITY_LABELS medium icin Orta dondurur', () => {
    expect(PRIORITY_LABELS.medium).toBe('Orta');
  });

  test('PRIORITY_LABELS high icin Yuksek dondurur', () => {
    expect(PRIORITY_LABELS.high).toBe('Yüksek');
  });

  test('uc oncelik seviyesi tanimli', () => {
    expect(Object.keys(PRIORITY_COLORS)).toHaveLength(3);
  });

  test('PRIORITY_LABELS uc deger icerir', () => {
    expect(Object.keys(PRIORITY_LABELS)).toHaveLength(3);
  });
});