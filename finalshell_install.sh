#! /bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar 

install_path=""
package_download_url=http://dl.hostbuf.com/finalshell/finalshell_data.zip
package_save_name=finalshell_data.zip

package_download_url=$package_download_url?"r=$RANDOM"
echo $package_download_url

function checkOS_TYPE(){
    if [[ ! -z "`uname | grep Darwin`" ]];then
        OS_TYPE=osx
		install_path=/Applications
    elif [[ ! -z "`uname | grep Linux`" ]];then
        OS_TYPE=linux
		install_path=/usr/lib
    else
        echo "Unsupported operating systems!"
        exit 1
    fi
}

function checkos(){
    if [[ -f /etc/redhat-release ]];then
        OS=centos
    elif [[ ! -z "`cat /etc/issue | grep bian`" ]];then
        OS=debian
    elif [[ ! -z "`cat /etc/issue | grep Ubuntu`" ]];then
        OS=ubuntu
    else
        echo "unknow"
    fi
	echo $OS
}

function checkjava(){
	java -version
	if [[ $? -le 1 ]] ;then
		echo " Run java success"
	else
		echo " Run java failed"
		echo $OS
		if [[ $OS = "centos" ]]; then
			echo " Install  centos java ..."
			yum install -y java-1.8.0-openjdk
		fi
		if [[ $OS = "ubuntu" ]]; then
			echo " Install  ubuntu java ..."
			apt-get -y install default-jre
		fi
		if [[ $OS = "debian" ]]; then
			echo " Install  debian java ..."
			apt-get -y install default-jre
		fi
	fi
	echo $result
}

function install(){
   rm -f $package_save_name
   if [[ $OS_TYPE = "osx" ]]; then
   n=0
   until [ $n -ge 10 ]
   do
      echo "Downloading finalshell_data.zip..."
      curl -o $package_save_name $package_download_url && break
      n=$[$n+1]
      sleep 2
   done
    elif [[ $OS_TYPE = "linux" ]]; then
		if ! wget -O $package_save_name $package_download_url ; then
			echo "Download software failed!"
			exit 1
		else
			echo "Download complete!"
		fi
    else
        echo "Unsupported operating systems!"
        exit 1
    fi
	
	unzip -o $package_save_name  -d $install_path
	
	cd $install_path/finalshelldata
	
	if [[ $OS_TYPE = "osx" ]]; then
	#chmod +x unpack200_mac
	#./unpack200_mac finalshell.pack.gz finalshell.jar
	#rm -f unpack200_mac
	unpack200 finalshell.pack.gz finalshell.jar
	rm -f finalshell.pack.gz
	
	chmod +x SetFileIcon
	./SetFileIcon  -image img/logo.icns -file start
	./SetFileIcon  -image img/logo.icns -file link_start_mac
	\cp link_start_mac /Applications/FinalShell
	\cp link_start_mac $HOME/Desktop/FinalShell
	
	chmod +x finalshell.desktop
	chmod +x /Applications/FinalShell
	chmod +x $HOME/Desktop/FinalShell
	elif [[ $OS_TYPE = "linux" ]]; then
		#chmod +x unpack200_linux
		#./unpack200_linux finalshell.pack.gz finalshell.jar
		#rm -f unpack200_linux
		unpack200 finalshell.pack.gz finalshell.jar
		rm -f finalshell.pack.gz
		
		\cp img/finalshell.png /usr/share/icons/hicolor/scalable/apps
		\cp finalshell.desktop /usr/share/applications
		chmod +x /usr/share/applications/finalshell.desktop
		
		chmod +x $HOME/DESKTOP/finalshell.desktop
		\cp finalshell.desktop $HOME/DESKTOP
		chmod +x $HOME/DESKTOP/finalshell.desktop
		\cp finalshell.desktop $HOME/桌面
		chmod +x $HOME/桌面/finalshell.desktop
		
		if [[ $OS = "debian" ]]; then
			\cp start_su start
		fi
    else
        echo ""
    fi
	
	rm -f unpack200_mac
	rm -f unpack200_linux
	rm -f link_start_mac
	rm -f SetFileIcon
		
	chmod +x start
	java -version
	if [[ $OS_TYPE = "osx" ]]; then
		open /Applications/FinalShell
	else
    	./start
	fi
	
}

checkOS_TYPE
checkos
checkjava
install
