
import { DateTime } from 'luxon';

export const formatDateFR = (date: string) => DateTime.fromISO(date).toLocaleString(DateTime.DATE_SHORT);
