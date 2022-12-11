import { FC } from 'react';

import { TechnologiesModalPropsType } from './types/TechnologiesModalPropsType';

import './TechnologiesModal.css';
import { TechnologyTypeEnum } from '../../models/enums/TechnologyTypeEnum';
import { TechnologyType } from '../../models/types/TechnologyType';

const TechnologiesModal: FC<TechnologiesModalPropsType> = (props: TechnologiesModalPropsType) => {
    const sortedTechnologies = props.allTechnologies.reduce(
        (acc, tech) => {
            if (tech.type === TechnologyTypeEnum.programmingLanguage) {
                acc.pl.push(tech);
            }

            if (tech.type === TechnologyTypeEnum.dbms) {
                acc.dbms.push(tech);
            }

            if (tech.type === TechnologyTypeEnum.other) {
                acc.other.push(tech);
            }

            return acc;
        },
        {
            pl: new Array<TechnologyType>,
            dbms: new Array<TechnologyType>,
            other: new Array<TechnologyType>, 
        }
    );

    const checkIsTechSelected = (id: number): boolean => {
        const tech = props.userTechnologies.find((tech) => tech.id === id);

        return tech ? true : false;
    };

    

    return(
        <>
            <div
                className="technologies-bg"
                onClickCapture={(e) => { e.stopPropagation(); props.onCloseModal(); }}
            >
            </div>
            <div className='technologies-modal'>
                <h3>Programming languages:</h3>
                {
                    sortedTechnologies.pl.map(
                        (pl, index) => {
                            return(
                                <div key={`pl-${index}`}>
                                    <input
                                        type="checkbox"
                                        checked={checkIsTechSelected(pl.id)}
                                        onChange={(e) => { props.onChangeTech(pl.id, e.target.checked) }}
                                    />
                                    <label>{pl.name}</label>
                                </div>
                            );
                        }
                    )
                }
                <h3>Database management systems:</h3>
                {
                    sortedTechnologies.dbms.map(
                        (dbms, index) => {
                            return(
                                <div key={`dbms-${index}`}>
                                    <input
                                        type="checkbox"
                                        checked={checkIsTechSelected(dbms.id)}
                                        onChange={(e) => { props.onChangeTech(dbms.id, e.target.checked) }}
                                    />
                                    <label>{dbms.name}</label>
                                </div>
                            );
                        }
                    )
                }
                <h3>Other technologies:</h3>
                {
                    sortedTechnologies.other.map(
                        (other, index) => {
                            return(
                                <div key={`other-${index}`}>
                                    <input
                                        type="checkbox"
                                        checked={checkIsTechSelected(other.id)}
                                        onChange={(e) => { props.onChangeTech(other.id, e.target.checked) }}
                                    />
                                    <label>{other.name}</label>
                                </div>
                            );
                        }
                    )
                }
            </div>
        </>
    );
}

export default TechnologiesModal;
