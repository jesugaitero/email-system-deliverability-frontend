import { useEffect, useState, useContext } from "react";
import { Context } from "../context";
import axios from "axios";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Badge from "../components/Badge";

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

const NEXT_PUBLIC = require('../utils/api').API

const index = () => {
  const [hidden, setHidden] = useState(true);
  const [currentUser, setCurrentUSer] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [emailSettings, setEmailSettings] = useState(null);
  const [linodeSettings, setLinodeSettings] = useState(null);
  const [bitlaunchSettings, setBitlaunchSettings] = useState(null);
  const [refreshTemplates, setRefreshTemplates] = useState(false);
  const [reloadEmailSettings, setReloadEmailSettings] = useState(false);
  const [reloadLinodeSettings, setReloadLinodeSettings] = useState(false);
  const [reloadBitlaunchSettings, setReloadBitlaunchSettings] = useState(false);

  const [servers, setServers] = useState([]);
  const [customServers, setCustomServers] = useState([]);
  const [bitlaunchServers, setBitlaunchServers] = useState([]);

  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  

  const loadLinodeServers = async () => {
    const { data } = await axios.get(`${NEXT_PUBLIC}/get-linode-servers`)
    // console.log(data)
    setServers(data)
  }

  const loadCustomServers = async () => {
    const { data } = await axios.get(`${NEXT_PUBLIC}/get-custom-servers`)
    console.log(data)
    setCustomServers(data)
  }

  const loadBitlaunchServers = async () => {
    const { data } = await axios.get(`${NEXT_PUBLIC}/get-bitlaunch-servers`)
    // console.log(data)
    setBitlaunchServers(data)
  }


  const fetchUser = async () => {
    try {
      const {data} = await axios.get(`${NEXT_PUBLIC}/current-user`);
      console.log(data);
      setCurrentUSer(data)
      setHidden(false);
      return data
    } catch (error) {
      // console.error(error)
      setHidden(true);
    }
  }

  const loadTemplates = async () => {
    const {data} = await axios.get(`${NEXT_PUBLIC}/email-templates`)
    setTemplates(data);
  }
  const loadEmailSettings = async () => {
    const {data} = await axios.get(`${NEXT_PUBLIC}/email-settings`)
    setEmailSettings(data[0]);
  }
  const loadLinodeSettings = async () => {
    const {data} = await axios.get(`${NEXT_PUBLIC}/linode-settings`)
    // console.log(data[0])
    setLinodeSettings(data[0]);
  }
  
  const loadBitlaunchSettings = async () => {
    const {data} = await axios.get(`${NEXT_PUBLIC}/bitlaunch-settings`)
    setBitlaunchSettings(data[0]);
  }
  
  const updateLinodesInfo = async () => {
    const {data} = await axios.get(`${NEXT_PUBLIC}/update-linodes`)
    // console.log(data)
  }
  const updateBitlaunchInfo = async () => {
    const {data} = await axios.get(`${NEXT_PUBLIC}/update-bitlaunch`)
    // console.log(data)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateLinodesInfo();
      updateBitlaunchInfo()
      loadLinodeServers()
      loadBitlaunchServers()
      loadCustomServers()
      // console.log('i want to play valorant')
    }, 20000)
  }, [])
  
  useEffect(() => {
    const userdata = fetchUser();
  }, [reloadEmailSettings])
  
  
  
  useEffect(() => {
    loadTemplates();
    setRefreshTemplates(false);
  }, [refreshTemplates])
  
  useEffect(() => {
    loadEmailSettings();
    setReloadEmailSettings(false);
  }, [reloadEmailSettings])
  
  useEffect(() => {
    loadLinodeSettings();
    setReloadLinodeSettings(false);
  }, [reloadLinodeSettings])
  
  useEffect(() => {
    loadBitlaunchSettings();
    setReloadBitlaunchSettings(false);
  }, [reloadBitlaunchSettings])


  const [showDashboard, setShowDashboard] = useState(true);
  const [showEmailDashboard, setShowEmailDashboard] = useState(false);
  const [showSettingsDashboard, setShowEmailSettings] = useState(false);
  const [showLinodeDashboard, setShowLinodeDashboard] = useState(false);

  return (
    <Container>
      <Sidebar
        user={user}
        setShowDashboard={setShowDashboard}
        setShowLinodeDashboard={setShowLinodeDashboard}
        setShowEmailDashboard={setShowEmailDashboard}
        setShowEmailSettings={setShowEmailSettings}
        setReloadEmailSettings={setReloadEmailSettings}
        emailSettings={emailSettings}
      />
      <MainContent
        setReloadLinodeSettings={setReloadLinodeSettings}
        setReloadBitlaunchSettings={setReloadBitlaunchSettings}
        loadBitlaunchServers={loadBitlaunchServers}
        loadLinodeServers={loadLinodeServers}
        loadCustomServers={loadCustomServers}
        bitlaunchServers={bitlaunchServers}
        setBitlaunchServers={setBitlaunchServers}
        servers={servers}
        customServers={customServers}
        setServers={setServers}
        setBitlaunchSettings={setBitlaunchSettings}
        bitlaunchSettings={bitlaunchSettings}
        setLinodeSettings={setLinodeSettings}
        linodeSettings={linodeSettings}
        showLinodeDashboard={showLinodeDashboard}
        emailSettings={emailSettings}
        templates={templates}
        setRefreshTemplates={setRefreshTemplates}
        showDashboard={showDashboard}
        showEmailDashboard={showEmailDashboard}
        showSettingsDashboard={showSettingsDashboard}
        fetchUser={fetchUser}
      />
      {/* {
       !hidden && (
        <div>
           <p>Hello world</p>
          <p>{JSON.stringify(user)}</p>
        </div>
       )   
      } */}
    </Container>
  );
};

export default index;
