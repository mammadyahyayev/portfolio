import LeftArrowIcon from "./icons/LeftArrowIcon.tsx";
function GoBackInHistory() {
    const goBackLink = (): void => {
        window.history.back()
        return
    }

    return <button
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
        onClick={goBackLink}
    >
        <LeftArrowIcon/>
        Mammad Yahyayev
    </button>;
}

export default GoBackInHistory;
