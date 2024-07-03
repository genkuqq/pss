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
	return `${hours} saat`;
}

export function findJobMinutes(jobName: string, data: any) {
	if (!Array.isArray(data)) {
		return "henüz oynanılmamış";
	}
	const job = data.find((item: any) => item.job === jobName);
	return job ? getTimeString(job.minutes) : "henüz oynanılmamış";
}

export function getTotalPlaytime(timedata: any) {
	const living = timedata.find((item: any) => item.job === "Living");
	const ghost = timedata.find((item: any) => item.job === "Ghost");
	const livingMinutes = living ? living.minutes : 0;
	const ghostMinutes = ghost ? ghost.minutes : 0;
	return getTimeString(livingMinutes + ghostMinutes);
}
