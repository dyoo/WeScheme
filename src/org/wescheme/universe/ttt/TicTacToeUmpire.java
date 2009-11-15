package org.wescheme.universe.ttt;

import java.util.List;
import java.util.ArrayList;

import org.wescheme.universe.Player;
import org.wescheme.universe.Umpire;


public class TicTacToeUmpire implements Umpire {
	List<String> moves;
	int[] grid;

	private int MAX_ROWS = 3;
	private int MAX_COLS = 3;
	
	// The values in the grid are either EMPTY, P1, or P2.
	private int EMPTY = 0;
	private int P1 = 1;
	private int P2 = 2;
	
	
	public TicTacToeUmpire(){
		this(new ArrayList<String>());
	}
	
	private TicTacToeUmpire(List<String> moves) {	
		this.moves = new ArrayList<String>(moves);
		this.grid = new int[MAX_ROWS * MAX_COLS];  // 3x3 grid
		
		for(int i = 0; i < grid.length; i++) { 
			grid[i] = EMPTY;
		}
		
		int p = P1;
		for(int i = 0; i < moves.size(); i++) {
			this.grid[Integer.parseInt(moves.get(i))] = p;
			p = flip(p);
		}
	}
	
	/* 
	 * Returns the opposite of p.
	 */
	private int flip(int p) {
		if (p == P1) { return P2; }
		else if (p == P2) { return P1; }
		else { throw new RuntimeException(); }
	}
	
	
	@Override
	public Umpire consume(String move) {
		assert (this.isLegalNextMove(move));
		
		List<String> newMoves = new ArrayList<String>(moves);
		newMoves.add(move);
		return new TicTacToeUmpire(newMoves);
	}

	@Override
	public List<String> getMoves() {
		return new ArrayList<String>(moves);
	}

	
	@Override
	public boolean isGameOver() {
		for(int i = 0; i < MAX_ROWS; i++) {
			if (sameRow(i) != 0) return true;
		}
		for(int i = 0; i < MAX_COLS; i++) {
			if (sameCol(i) != 0) return true;
		}
		if (sameDiagonal(1) != 0 || sameDiagonal(-1) != 0) {
			return true;
		}
		return false;
	}

	
	@Override
	public boolean isLegalNextMove(String move) {
		// TODO Auto-generated method stub
		try {
			int pos = Integer.parseInt(move);
			if (pos < 0 || pos >= grid.length) { return false; }
			if (grid[pos] != EMPTY) { return false; }
			return true;
		} catch (NumberFormatException e) { return false; }
	}
		
	
	
	private int sameRow(int row) {
		int p = elt(row, 0);
		if (p == EMPTY) { return 0; }
		for (int col = 1; col < MAX_COLS; col++) {
			if (p != this.elt(row, col))
				return 0;
		}
		return p;
	}
	
	private int sameCol(int col) {
		int p = elt(0, col);
		if (p == EMPTY) { return 0; }
		for (int row = 1; row < MAX_ROWS; row++) {
			if (p != elt(row, col)) 
				return 0;
		}
		return p;		
	}
	
	
	private int elt(int row, int col) {
		return this.grid[row * MAX_COLS + col];
	}
	
	
	private int sameDiagonal(int slope) {
		int row, col;
		if (slope == 1) {
			row = 0;
			col = 0;
		} else if (slope == -1) {
			row = MAX_ROWS - 1;
			col = 0;
		} else {
			throw new RuntimeException();
		}
		int p = elt(row, col);
		if (p == EMPTY) { return 0; }
		while (col < MAX_COLS) {
			if (elt(row, col) != p) { return 0; }
			row = row + slope;
			col++;
		}
		return p;
	}
	
	
	private Player intToPlayer(int p) { 
		assert( p == P1 || p == P2);
		return (p == P1 ? Player.PLAYER1 : Player.PLAYER2);
	}

	
	@Override
	public Player whoWins() {		
		for(int i = 0; i < MAX_ROWS; i++) {
			if (sameRow(i) != 0) return intToPlayer(sameRow(i));
		}
		for(int i = 0; i < MAX_COLS; i++) {
			if (sameCol(i) != 0) return intToPlayer(sameCol(i));
		}
		if (sameDiagonal(1) != 0) {
			return intToPlayer(sameDiagonal(1));
		}
		if (sameDiagonal(-1) != 0) {
			return intToPlayer(sameDiagonal(-1));
		}
		throw new RuntimeException();
	}


	@Override
	public Player whoseTurn() {
		return this.moves.size() % 2 == 0 ? Player.PLAYER1 : Player.PLAYER2;
	}

}
