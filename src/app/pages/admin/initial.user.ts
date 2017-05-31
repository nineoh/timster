import { IClient } from './../../services/client/client.model';

export const INITIALUSERS: IClient[] = [
            {
                first: 'Hans',
                last: 'Jakob',
                username: 'hj',
                password: '12341234',
                profile: 'http://graph.facebook.com/691850668/picture?width=200&height=200'
            },
            {
                first: 'Jessica',
                last: 'Alba',
                username: 'jessica',
                password: '11111111',
                skills: [
                    { 
                        name: 'Something',
                        level: 1
                    }
                ],
                avatar: 'http://static.celebuzz.com/uploads/2010/12/17/msg-12926143399-3.jpg'
            },
            {
                first: 'Paul',
                last: 'Panzer',
                username: 'paul',
                password: '11111111',
                skills: [
                    {
                        name: 'Talk',
                        level: 4
                    },
                    {
                        name: 'Humor',
                        level: 3
                    },
                    {
                        name: 'Handsomeness',
                        level: 1
                    }
                ],
                avatar: 'https://iutv.de/sites/default/files/styles/moderator_detail/public/panzer_neu.png?itok=fLNYPbpM'
            },
            {
                first: 'Nino',
                last: 'Lanfranchi',
                username: 'nino',
                password: '12345678',
                skills: [
                    {
                        name: 'C#',
                        level: 5
                    },
                    {
                        name: 'Angular 1',
                        level: 4
                    },
                    {
                        name: 'Angular 2',
                        level: 5
                    },
                    {
                        name: 'ReactJS',
                        level: 1
                    },
                    {
                        name: 'HTML5',
                        level: 5
                    },
                    {
                        name: 'Java',
                        level: 3
                    },
                    {
                        name: 'Node.js',
                        level: 2
                    },
                    {
                        name: 'CSS3',
                        level: 4
                    },
                    {
                        name: 'Sass',
                        level: 4
                    }
                ],
                avatar: 'https://www.xing.com/image/0_2_e_6fd2f73e6_18018322_2/nino-lanfranchi-foto.256x256.jpg'
            }

        ];