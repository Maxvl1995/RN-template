import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const DEFAULT_FORMAT = 'MM/DD/YYYY';
const FORMAT_DATETIME = 'MM/DD/YYYY H:mm:ss';
const FORMAT_JOINED_DATE = 'MMM YYYY';

const localeKeys: {[key: string]: string} = {
  en: 'en',
  vi: 'vi',
};

export type IDate = Date | number | string;

const toMomentLocale = (locale: string): string => localeKeys[locale];

const getCurrent = () => {
  return dayjs().format(DEFAULT_FORMAT);
};

const formatDatetime = (date?: IDate) => {
  if (!date) {
    return dayjs().format(FORMAT_DATETIME);
  }
  return dayjs(date).format(FORMAT_DATETIME);
};

const formatDate = (date?: IDate, format?: string) => {
  if (!date) {
    return '';
  }
  return dayjs(date).format(format ?? DEFAULT_FORMAT);
};

const getDateFromNow = (date?: IDate) => {
  if (dayjs(date).isValid()) {
    return dayjs(date).fromNow();
  }
  return date;
};

const getTitleGroupByDate = (date?: IDate) => {
  const diff = dayjs().diff(dayjs(date), 'day');
  if (dayjs().isValid()) {
    if (diff === 0) {
      return 'Today';
    } else if (diff === 1) {
      return 'Yesterday';
    } else {
      return date;
    }
  }
  return date;
};

export default {
  formatDate,
  getCurrent,
  formatDatetime,
  getDateFromNow,
  DEFAULT_FORMAT,
  FORMAT_DATETIME,
  FORMAT_JOINED_DATE,
  getTitleGroupByDate,
  toMomentLocale,
};
