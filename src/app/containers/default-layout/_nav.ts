import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: '대시보드',
    url: '/dashboard',
  },
  {
    name: '시스템 로그',
    url: '/systemlog',
  },
  {
    name: '발송 서버 정보',
    url: '/sendinfo',
  },
  {
    name: '서버별 전송량',
    url: '/sendamount',
  },
  {
    name: 'CSP 정보',
    url: '/csp',
  },
  {
    name: 'TAG 분석(CME/IDS)',
    url: '/tag',
  },
  {
    name: 'PRTG',
    url: 'https://211.240.60.71:8443/index.htm',
  },
  {
    name: '서버별 개발 시트',
    url: 'https://docs.google.com/spreadsheets/d/1zI_qr9geUJy6rjTiQZ_Vtp1S2vA-72-1NiqwwwJPzZY/edit#gid=0',
  },
  {
    title: true,
    name: '스위치 관리'
  },
  {
    name: '목동',
    url: '/mokdong',
    children: [
      {
        name: 'MDSW-SND1',
        url: '/mokdong/snd1'
      },
      {
        name: 'MDSW-SND2',
        url: '/mokdong/snd2'
      },
      {
        name: 'MDSW-SND3',
        url: '/mokdong/snd3'
      },
      {
        name: 'MDSW-SND4',
        url: '/mokdong/snd4'
      },
    ]
  },
  {
    name: '상암',
    url: '/sangam',
    children: [
      {
        name: 'SASW-SND1',
        url: '/sangam/snd1'
      },
      {
        name: 'SASW-SND2',
        url: '/sangam/snd2'
      },
      {
        name: 'SASW-SND3',
        url: '/sangam/snd3'
      },
    ]
  },
  {
    name: '서버 관리',
    title: true
  },
  {
    name: '목동',
    url: '/mokdong',
    children: [
      {
        name: 'CMEDEV',
        url: '/mokdong/cmedev'
      },
      {
        name: 'CME20',
        url: '/mokdong/cme20'
      },
      {
        name: 'CME05',
        url: '/mokdong/cme05'
      },
      {
        name: 'CME03',
        url: '/mokdong/cme03'
      },
      {
        name: 'CME07',
        url: '/mokdong/cme07'
      },
      {
        name: 'CME21',
        url: '/mokdong/cme21'
      },
      {
        name: 'MDFF01',
        url: '/mokdong/mdff01'
      },
      {
        name: 'MDOF01',
        url: '/mokdong/mdof01'
      },
      {
        name: 'CME01',
        url: '/mokdong/cme01'
      },
    ]
  },
  {
    name: '상암',
    url: '/sangam',
    children: [
      {
        name: 'CME06',
        url: '/sangam/cme06'
      },
      {
        name: 'CME11',
        url: '/sangam/cme11'
      },
      {
        name: 'CME02',
        url: '/sangam/cme02'
      },
      {
        name: 'CME30',
        url: '/sangam/cme30'
      },
      {
        name: 'MDFF02',
        url: '/sangam/mdff02'
      },
      {
        name: 'CME04',
        url: '/sangam/cme04'
      },
    ]
  },
];
