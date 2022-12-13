import { TechnologyType } from "../../../models/types/TechnologyType";

export type TechnologiesModalPropsType = {
    onCloseModal: () => void,
    onChangeTech: (id: number, isSelected: boolean) => void,
    onSubmitForm: () => void,
    allTechnologies: Array<TechnologyType>,
    userTechnologies: Array<TechnologyType>,
}
