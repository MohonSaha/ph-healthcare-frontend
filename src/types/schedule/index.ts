export type ISchedule = {
  [x: string]: any;
  id?: string;
  startDateTime: string;
  endtDateTime: string;
};

export type IScheduleFrom = {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};
