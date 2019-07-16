export function formEmailValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const forbidden = emailRe.test(control.value);
        return !forbidden ? { email: { value: control.value } } : null;
    };
}

export function formSlaryValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return (control.value > 1000000) ? { salary: { value: control.value } } : null;
    };
}

export function formAgeValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const todayDate = new Date();
        const todayYear = todayDate.getFullYear();
        const todayMonth = todayDate.getMonth();
        const todayDay = todayDate.getDate();

        const birthYear = parseInt(control.value);
        const birthMonth = parseInt(control.value.slice(5));
        const birthDay = parseInt(control.value.slice(8));
        let age = todayYear - birthYear;

        if (todayMonth < (birthMonth - 1)) {
            age--;
        }
        if (((birthMonth - 1) === todayMonth) && (todayDay < birthDay)) {
            age--;
        }
        return (age < 18) ? { salary: { value: control.value } } : null;
    };
}
