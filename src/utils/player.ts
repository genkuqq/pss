export interface PlayerDataProps {
	ckey: string;
	byond_key: string;
	first_seen: Date;
	last_seen: Date;
	first_seen_round: number;
	last_seen_round: number;
	byond_age: string;
}

export interface JobProps {
	icon: string;
	iconmap: string;
	name: string;
	data: any;
}

export interface PlayerPlaytimeDataProps {
	job: string;
	minutes: number;
}

export async function getPlayerData(
	ckey: string
): Promise<PlayerDataProps | null> {
	// note: Testing loading await new Promise((resolve) => setTimeout(resolve, 14000));
	const response = await fetch(`https://api.turkb.us/v2/player/?ckey=${ckey}`, {
		cache: "no-cache",
		headers: {
			"X-DEV-KEY": process.env.DEV_KEY || "",
		},
	});
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data;
}

export async function getPlayerPlaytime(
	ckey: string
): Promise<PlayerPlaytimeDataProps | null> {
	// note: Testing loading await new Promise((resolve) => setTimeout(resolve, 14000));
	const response = await fetch(
		`https://api.turkb.us/v2/player/roletime?ckey=${ckey}`,
		{
			cache: "no-cache",
			headers: {
				"X-DEV-KEY": process.env.DEV_KEY || "",
			},
		}
	);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();

	return data;
}

export function getTimeString(minutes: number) {
	const hours = Math.floor((minutes / 60) * 10) / 10;
	const hourswcomma = hours.toString().replace(".", ",");
	return `${hourswcomma} saat`;
}

export function findJobMinutes(jobName: string, data: any) {
	if (!Array.isArray(data)) {
		return "—";
	}
	const job = data.find((item: any) => item.job === jobName);
	return job ? getTimeString(job.minutes) : "—";
}

export function getTotalPlaytime(timedata: any) {
	const living = timedata.find((item: any) => item.job === "Living");
	const ghost = timedata.find((item: any) => item.job === "Ghost");
	const livingMinutes = living ? living.minutes : 0;
	const ghostMinutes = ghost ? ghost.minutes : 0;
	return getTimeString(livingMinutes + ghostMinutes);
}

export function getDetailedDate(lastSeenDate: Date) {
	const now = new Date();
	const difference = now.getTime() - lastSeenDate.getTime();
	if (difference <= 0) {
		return "Şimdi";
	}
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

	if (days > 0) {
		return `${days} gün, ${hours} saat, ${minutes} dakika önce`;
	} else if (hours > 0) {
		return `${hours} saat, ${minutes} dakika önce`;
	} else {
		return `${minutes} dakika önce`;
	}
}
