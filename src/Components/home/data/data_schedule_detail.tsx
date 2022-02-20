import { type } from "os";
type Update_schedule_detail_props = {
    time_update : string;
    content_update :string;
    status_update :string;
};
export let Update_schedule_detail : Update_schedule_detail_props[] = [
    {
        time_update : "02/07/2020 08:30 AM",
        content_update :"Thay đổi trạng thái",
        status_update :"Đang áp dụng",
    },
    {
        time_update : "02/07/2020 08:30 AM",
        content_update :"Thêm biểu phí",
        status_update :"Chưa áp dụng",
    }
];