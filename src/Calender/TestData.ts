import { CalenderEventCanBeOnModal } from './CalenderEvent';
import {getParams} from "./calender-helper";

const dateInitForDemo = new Date().getDate() + 3;
const pallet = getParams().light !== undefined
  ? ['#b8f9ba', '#ccddff', '#dfdfdf']
  : ['#0b8043', '#039be5', '#616161'];

export const events: { [p: number]: CalenderEventCanBeOnModal[] } = {
  [dateInitForDemo]: [
    {
      title: '〇〇建設様配達先',
      startDate: new Date('2022-02-28 09:00:00'),
      endDate: new Date('2022-02-28 11:00:00'),
      backgroundColor: pallet[0],
      lat: 34.7141918,
      lng: 137.73481,
      accountName: '清水',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先2',
      startDate: new Date('2022-02-28 10:00:00'),
      endDate: new Date('2022-02-28 12:45:00'),
      backgroundColor: pallet[1],
      lat: 34.7141918,
      lng: 137.93481,
      accountName: '吉田',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先3',
      startDate: new Date('2022-02-28 13:00:00'),
      endDate: new Date('2022-02-28 15:00:00'),
      backgroundColor: pallet[2],
      lat: 34.7241918,
      lng: 137.71481,
      accountName: '佐々木',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先4',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 17:00:00'),
      backgroundColor: pallet[1],
      lat: 34.7141918,
      lng: 137.88481,
      accountName: '浜松太郎',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先5',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 17:00:00'),
      backgroundColor: pallet[0],
      lat: 34.7141918,
      lng: 137.75481,
      accountName: '佐藤',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先10',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 15:30:00'),
      backgroundColor: pallet[1],
      lat: 34.6541918,
      lng: 137.73481,
      accountName: '鈴木',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先6',
      startDate: new Date('2022-02-28 16:30:00'),
      endDate: new Date('2022-02-28 19:00:00'),
      backgroundColor: pallet[1],
      lat: 34.681918,
      lng: 137.73481,
      accountName: '田中',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先7',
      startDate: new Date('2022-02-28 18:00:00'),
      endDate: new Date('2022-02-28 19:00:00'),
      backgroundColor: pallet[2],
      lat: 34.7041918,
      lng: 137.73481,
      accountName: '木村',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先8',
      startDate: new Date('2022-02-28 18:00:00'),
      endDate: new Date('2022-02-28 20:00:00'),
      backgroundColor: pallet[1],
      lat: 34.8141918,
      lng: 137.73481,
      accountName: '伊藤',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先9',
      startDate: new Date('2022-02-28 19:00:00'),
      endDate: new Date('2022-02-28 20:00:00'),
      backgroundColor: pallet[1],
      lat: 34.7741918,
      lng: 137.73481,
      accountName: '渡辺',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
  ],
  [dateInitForDemo + 1]: [
    {
      title: '〇〇建設様配達先3',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 12:00:00'),
      backgroundColor: pallet[1],
      lat: 34.7241918,
      lng: 137.73481,
      accountName: '山本',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先4',
      startDate: new Date('2022-02-28 10:30:00'),
      endDate: new Date('2022-02-28 12:00:00'),
      backgroundColor: pallet[1],
      lat: 34.7111918,
      lng: 137.73481,
      accountName: '中村',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先5',
      startDate: new Date('2022-02-28 10:45:00'),
      endDate: new Date('2022-02-28 12:15:00'),
      backgroundColor: pallet[1],
      lat: 34.6741918,
      lng: 137.73481,
      accountName: '小林',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先1',
      startDate: new Date('2022-02-28 14:30:00'),
      endDate: new Date('2022-02-28 16:45:00'),
      backgroundColor: pallet[0],
      lat: 34.7341918,
      lng: 137.73481,
      accountName: '加藤',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
    {
      title: '〇〇建設様配達先2',
      startDate: new Date('2022-02-28 14:30:00'),
      endDate: new Date('2022-02-28 17:00:00'),
      backgroundColor: pallet[1],
      lat: 34.8141918,
      lng: 137.73581,
      accountName: '山田',
      phoneNumber: '090-XXXX-XXXX',
      distName: '配達先名',
      carryMethod: 'RC x 5台',
      weight: '75t',
      operator: 'オペあり',
      info: 'AF4.5',
      freeText: `フリーテキスト
フリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキストフリーテキストフリーテキストフリーテキストフリーテキスト
フリーテキスト
`,
    },
  ],
};
