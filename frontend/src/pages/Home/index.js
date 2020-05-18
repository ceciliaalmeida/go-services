import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import { FiSearch } from "react-icons/fi";

import useApi from '../../services/api';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="Qual serviço você procura?" />
                            <button><FiSearch size={25} /></button>
                        </form>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Serviços adicionados recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i} />
                        )}
                    </div>

                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;