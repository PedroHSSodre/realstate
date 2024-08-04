export type AnnouncementDto = {
  id: number;
  title: string;
  img?: string;
  bedroom?: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};