import React, { useState } from 'react';
import s from './tabs.module.scss';
import { Button } from '../components/button/button';

interface Tab {
    label: string;
    value: string;
    isActive: boolean;
}

export const Tabs: React.FC = () => {
    const tabs: Tab[] = [
        { label: 'ПН/СР/ПТ', value: 'ПН/СР/ПТ', isActive: true },
        { label: 'ВТ/ЧТ', value: 'ВТ/ЧТ', isActive: false },
        { label: 'ПН', value: 'ПН', isActive: false },
        { label: 'ВТ', value: 'ВТ', isActive: false },
        { label: 'СР', value: 'СР', isActive: false },
        { label: 'ЧТ', value: 'ЧТ', isActive: false },
        { label: 'ПТ', value: 'ПТ', isActive: false },
        { label: 'СБ', value: 'СБ', isActive: false },
        { label: 'ВС', value: 'ВС', isActive: false },
    ];

    const handleTabClick = (tab: Tab) => {
        const updatedTabs = tabs.map((t) => ({
            ...t,
            isActive: t.label === tab.label,
        }));
        setActiveTab(updatedTabs);
    };

    const [activeTab, setActiveTab] = useState(tabs);

    return (
        <div className={s.tabs}>
            <div className={s.buttons}>
                {activeTab.map((tab) => (
                    <Button
                        key={tab.label}
                        className={`${s.tab} ${tab.isActive ? s.active : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab.label}
                    </Button>
                ))}
            </div>
        </div>
    );
};
