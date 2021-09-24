import { defaultTo } from 'ramda';
import Swal, { SweetAlertResult } from 'sweetalert2';

type ToastType = {
  title: string
  type: 'error' | 'warning' | 'success' | 'info' | 'question'
  timer?: number
}

export const useToast = () => {
  return ({ title, type, timer }: ToastType): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
      title: title,
      icon: type,
      timer: defaultTo(5000, timer),
      timerProgressBar: true,
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false
    })
  }
}

export default useToast;
